import type { Route } from "./+types/home";
import { MinusIcon,} from '@heroicons/react/20/solid'
import {Trans, useTranslation} from "react-i18next";
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Passenger Transportation System — MVP & Early Results" },
        {
            name: "description",
            content:
                "MVP replaced manual coordination with a structured workflow: centralized requests, grouping by route/date, statuses, and partner redirection.",
        },
    ];
}

type IconType = ComponentType<SVGProps<SVGSVGElement>>
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
export default function CaseTelegramMedicalBotProblems() {
    const {t} =  useTranslation();

    {
        return (
            <motion.div
                className="lg:pr-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="lg:max-w-lg">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("transportOps.mvpTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("transportOps.mvpIntro")}
                    </p>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.capabilitiesHeading")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.capabilityIntake")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.capabilityGrouping")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.capabilityDecision")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.capabilityTracking")}</IconListItem>
                    </ul>

                    <p className="mt-10 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.resultsHeading")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.resultChaos")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.resultFaster")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.resultDataDriven")}</IconListItem>
                    </ul>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.mvpOutcome")}
                    </p>
                </div>
            </motion.div>
        );
    }}
