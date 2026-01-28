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
        { title: "Passenger Transportation System — Problem & Solution" },
        {
            name: "description",
            content:
                "A non-standard model: routes depend on demand and partner availability. The solution structures requests and supports decisions without fixed schedules.",
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
                        {t("transportOps.problemSolutionTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("transportOps.problemIntro")}
                    </p>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.modelIntro")}
                    </p>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.challengesIntro")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.challengeNoTimetable")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.challengePlanning")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.challengeDecision")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.challengeManual")}</IconListItem>
                    </ul>

                    <h3 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("transportOps.solutionTitle")}
                    </h3>

                    <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.solutionIntro")}
                    </p>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.systemIntro")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.systemCollect")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.systemAnalyze")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.systemDecide")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.systemFlexible")}</IconListItem>
                    </ul>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("transportOps.closing")}
                    </p>
                </div>
            </motion.div>
        );
    }}
