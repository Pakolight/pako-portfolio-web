import type { Route } from "./+types/home";
import { MinusIcon } from '@heroicons/react/20/solid'
import {useParams} from "react-router";
import {Trans, useTranslation} from "react-i18next";
import type { ComponentType, SVGProps } from "react"
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Medical Services Platform — MVP & Early Results" },
        {
            name: "description",
            content:
                "MVP launched fast: streamlined onboarding via Telegram, faster request intake, and measurable reduction of manual operator work.",
        },
    ];
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg dark:text-gray-400 ">
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.MVPHeading")}
                </h2>
                <p className="mt-6">
                    {t("medicalBot.MVPDescription")}
                </p>
                <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                     {t("medicalBot.LiCompletionRate")}
                                    </span>
                    </li>
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                     {t("medicalBot.LiIntake")}

                                    </span>
                    </li>
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                     {t("medicalBot.LiCallCenter")}
                                    </span>
                    </li>
                </ul>
                <div className="lg:max-w-lg">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("medicalBot.platformEvolutionTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        <Trans
                            i18nKey="medicalBot.platformEvolutionDescription"
                            components={[emphasis, emphasis, emphasis]}
                        />
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">
                        {t("medicalBot.platformImprovementsHeading")}
                    </h3>

                    <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformImprovementUi")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformImprovementCalendar")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformImprovementCrm")}
                        </IconListItem>
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">
                        {t("medicalBot.platformResultsHeading")}
                    </h3>

                    <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformResultPatientLookup")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformResultAvailability")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformResultSelfService")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.platformResultTracking")}
                        </IconListItem>
                    </ul>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("medicalBot.workflowTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("medicalBot.workflowDescription")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.workflowRouting")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.workflowStatuses")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("medicalBot.workflowVisibility")}
                        </IconListItem>
                    </ul>

                    <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                        <Trans i18nKey="medicalBot.workflowOutcome" components={[emphasis]} />
                    </p>
                </div>
            </div>
        </motion.div>

    )
}
