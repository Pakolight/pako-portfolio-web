import type { Route } from "./+types/home";
import {motion} from "motion/react"
import {ContentContainerVsGradient} from "~/components/shared";
import {ContactMeDialog} from "~/components/shared";
import {useTranslation} from "react-i18next";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Contact — Kostiantyn Palyvoda" },
        {
            name: "description",
            content:
                "Get in touch to discuss automation, integrations, or custom web systems. Email: info@pako.work or WhatsApp: +31 6 290 392 51.",
        },
    ];
}


export default function Contacts() {
    const { t } = useTranslation()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white py-24 sm:py-32 dark:bg-gray-900">
            <ContentContainerVsGradient className="min-h-0">
                <div className="h-fit mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                            {t("contactPage.title")}
                        </h2>

                        <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                            {t("contactPage.intro")}
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {/* Form */}
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
                                {t("contactPage.formTitle")}
                            </h3>
                            <p className="border-l border-gray-200 pt-2 pl-6 text-gray-600 dark:border-white/10 dark:text-gray-400">
                                {t("contactPage.formDescription")}
                            </p>
                            <div className="pt-2 pl-6">
                                <ContactMeDialog/>
                            </div>

                        </div>

                        {/* Email */}
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
                                {t("contactPage.emailTitle")}
                            </h3>
                            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600 dark:border-white/10 dark:text-gray-400">
                                <p>{t("contactPage.emailIntro")}</p>
                                <p>
                                    <a
                                        href="mailto:info@pako.work"
                                        className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                                    >
                                        info@pako.work
                                    </a>
                                </p>
                            </address>
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
                                {t("contactPage.linkedinTitle")}
                            </h3>
                            <p className="border-l border-gray-200 pt-2 pl-6 text-gray-600 dark:border-white/10 dark:text-gray-400">
                                {t("contactPage.linkedinDescription")}
                                <span>&nbsp;</span>
                                <a className={"underline"} href="https://www.linkedin.com/in/konstantyn-palyvoda/">LinkedIn</a>
                            </p>
                        </div>

                        {/* WhatsApp / Phone */}
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
                                {t("contactPage.phoneTitle")}
                            </h3>
                            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600 dark:border-white/10 dark:text-gray-400">
                                <p>{t("contactPage.phoneIntro")}</p>
                                <p className="font-medium">
                                    <a
                                        href="tel:+31629039251"
                                        className="text-indigo-600 hover:underline dark:text-indigo-400"
                                    >
                                        +31 6 290 392 51
                                    </a>
                                </p>
                            </address>
                        </div>
                    </div>
                </div>

            </ContentContainerVsGradient>
        </motion.div>
    )
}
