import type { Route } from "./+types/home";
import {Hero, Feature, HomeContent} from "~/components/home";
import {motion} from "motion/react"
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
    const { sendMail } = await import("../services/send-mail.server");
    const formData = await request.formData();
    const email = formData.get('email');
    const name = formData.get('name');
    const lastName = formData.get('last-name');
    const message = formData.get('message');
    const serverMailBox = process.env.MAIL_FROM;
    await sendMail({to: serverMailBox, subject:`New message from ${name} ${lastName}`,
        text: `client email: ${email} \n message: ${message} \n`,} );

}

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>

        <Hero/>
        <Feature/>
        <HomeContent/>

      </motion.div>
  );
}
