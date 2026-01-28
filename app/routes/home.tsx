import type { Route } from "./+types/home";
import {Hero, Feature, HomeContent} from "~/components/home";
import {Alert} from "~/components/shared";
import {motion} from "motion/react"
import {type LoaderFunctionArgs, type ActionFunctionArgs, useActionData } from "react-router";
import {useTranslation} from "react-i18next";
import {ContentContainerVsGradient} from "~/components/shared";

export async function action({ request, params }: ActionFunctionArgs) {
    const { sendMail } = await import("../services/send-mail.server");
    const { createContactSuccessEmail } = await import("../services/email-templates.server");
    const { getI18n } = await import("../i18n/i18n.server");
    const formData = await request.formData();
    const email = formData.get("email");
    const fullName = formData.get("full-name");
    const formMessage = formData.get("message");
    const lang = formData.get("lang");
    const serverMailBox = process.env.MAIL_FROM;
    if (!serverMailBox) {
        throw new Error("MAIL_FROM is not set");
    }
    const safeEmail = typeof email === "string" ? email.trim() : "";
    const safeFullName = typeof fullName === "string" ? fullName.trim() : "";
    const safeMessage = typeof formMessage === "string" ? formMessage.trim() : "";
    const safeLang = typeof lang === "string" ? lang.trim() : "";

    const i18n = await getI18n(safeLang);
    const successSubject = i18n.t("email.contactSuccess.subject");
    const successHeading = i18n.t("email.contactSuccess.heading");
    const successMessage = i18n.t("email.contactSuccess.message");
    const successSignature = i18n.t("email.contactSuccess.signature");
    const successBrandName = i18n.t("email.contactSuccess.brandName");
    const successFooter = i18n.t("email.contactSuccess.footer");

    try {

        await sendMail({
            to: serverMailBox,
            subject: fullName ? `New message from ${safeFullName}` : "New message from website",
            text: `client email: ${safeEmail}\nmessage: ${safeMessage}\nlang: ${safeLang}`,
            replyTo: safeEmail || undefined,
        });

        if (safeEmail) {
            const { subject, html, text } = await createContactSuccessEmail({
                subject: successSubject,
                brandName: successBrandName,
                heading: successHeading,
                message: successMessage,
                signature: successSignature,
                footer: successFooter,
            });
            await sendMail({
                to: safeEmail,
                subject,
                html,
                text,
            });
        }

        return {status: true, message: "successConnection"};
    }catch (e){
        console.error(e);
        return {status: false, message: "errorConnection"}
    }
}

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "PAKO — Full-Stack Developer" },
        {
            name: "description",
            content:
                "Full-stack developer building fast, reliable web applications for automation, bookings, internal tools, and integrations.",
        },
    ];
}



export default function Home() {
    const actionData  = useActionData() as {
        status: boolean;
        message: string;
    }

    const {t} =  useTranslation();

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
          <div className="fixed top-16 left-0 z-10 w-full" >
              <Alert status={actionData?.status ?? false}
                     alertMessage={actionData ? t(`alert.${actionData.message}`) : ""}
                     open={!!actionData}
              />
          </div>
        <Hero/>
        <Feature/>
        <HomeContent/>

      </motion.div>
  );
}
