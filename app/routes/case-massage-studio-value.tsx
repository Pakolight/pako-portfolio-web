import type { Route } from "./+types/home";
import type { ComponentType, SVGProps } from "react";
import { MinusIcon } from "@heroicons/react/20/solid";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Massage Booking Website — Value for Business" },
        {
            name: "description",
            content:
                "Ideal for solo services: reduced manual messaging, flexible scheduling, clearer client communication, and automated routine tasks.",
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
                    {t("massageStudio.valueTitle")}
                </h2>

                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("massageStudio.valueIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueFlexibleBooking")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueReduceOverhead")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valuePersonalTouch")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueAvoidComplexity")}
                    </IconListItem>
                </ul>

                <p className="mt-10 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("massageStudio.valueAdaptIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueMassage")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueBeauty")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueTrainers")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.valueSoloServices")}
                    </IconListItem>
                </ul>
            </div>
        </motion.div>
    );
}
