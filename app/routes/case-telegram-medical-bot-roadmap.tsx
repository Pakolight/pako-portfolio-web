import { MinusIcon } from '@heroicons/react/20/solid'
import {useParams} from "react-router";
import {Trans, useTranslation} from "react-i18next";
import type { ComponentType, SVGProps } from "react"
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export default function CaseTelegramMedicalBotMVP() {
    const langParam = useParams().lang;
    let lang = "eu"
    if (langParam) {
        lang = langParam;
    }
    const {t} =  useTranslation();
    const emphasis = <span className="italic font-bold" />
    type IconType = ComponentType<SVGProps<SVGSVGElement>>;
    const ListIcon: IconType = MinusIcon;

    function IconListItem({
                              icon: Icon,
                              children,
                          }: {
        icon: IconType;
        children: React.ReactNode;
    }) {
        return (
            <li className="flex gap-x-2">
                <Icon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                />
                <span>{children}</span>
            </li>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="lg:max-w-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.roadmapTitle")}
                </h2>

                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("medicalBot.telegramLimitsIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitComponents")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitForms")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitLatency")}</IconListItem>
                </ul>

                <h3 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white">
                    {t("medicalBot.nextStepsHeading")}
                </h3>

                {/* 1) Embedded Web App */}
                <h4 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.webAppHeading")}
                </h4>

                <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("medicalBot.webAppDescription")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.webAppTelegramAuth")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.webAppRichUi")}</IconListItem>
                </ul>

                {/* 2) AI-assisted interaction */}
                <h4 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.aiHeading")}
                </h4>

                <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("medicalBot.aiDescription")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.aiGuidance")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.aiConversational")}</IconListItem>
                </ul>

                {/* 3) Operator workspace */}
                <h4 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.operatorHeading")}
                </h4>

                <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("medicalBot.operatorDescription")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.operatorDrafting")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.operatorSeparation")}</IconListItem>
                </ul>

                <p className="mt-10 text-base/7 text-gray-600 dark:text-gray-400">
                    <Trans
                        i18nKey="medicalBot.roadmapClosing"
                        components={[emphasis, emphasis]}
                    />
                </p>
            </div>
        </motion.div>

    )
}
