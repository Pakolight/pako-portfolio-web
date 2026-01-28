import type { Route } from "./+types/home";
import type { ComponentType, SVGProps } from "react";
import { MinusIcon } from "@heroicons/react/20/solid";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Massage Booking Website — Roadmap" },
        {
            name: "description",
            content:
                "Planned: internal admin calendar, faster navigation across requests, rescheduling tools, reminders, and improved operational overview.",
        },
    ];
}

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const ListIcon: IconType = MinusIcon;
const emphasis = <span className="italic font-bold" />;

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

export default function MassageStudioMvpEarlyResults() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="lg:pr-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="lg:max-w-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("massageStudio.roadmapTitle")}
                </h2>

                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("massageStudio.roadmapIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.roadmapCalendar")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.roadmapOperatorView")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.roadmapNavigation")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.roadmapAutomation")}
                    </IconListItem>
                </ul>

                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("massageStudio.roadmapOutcome")}
                </p>
            </div>
        </motion.div>
    );
}
