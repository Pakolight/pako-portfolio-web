import type { Route } from "./+types/home";
import type { ComponentType, SVGProps } from "react";
import { MinusIcon } from "@heroicons/react/20/solid";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Massage Booking Website — MVP & Features" },
        {
            name: "description",
            content:
                "MVP: service catalog, cart-style request flow, admin panel, web messenger for clients, and automated Google Calendar synchronization.",
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
                {/* Title */}
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("massageStudio.mvpTitle")}
                </h2>

                {/* Intro */}
                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("massageStudio.mvpIntro")}
                </p>

                {/* Core features */}
                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpFeatureBlog")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpFeatureCatalog")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpFeatureCart")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpFeatureNotifications")}
                    </IconListItem>
                </ul>

                {/* Panel intro */}
                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("massageStudio.mvpPanelIntro")}
                </p>

                <p className="mt-6 text-base/7 font-semibold text-gray-900 dark:text-white">
                    {t("massageStudio.mvpPanelInside")}
                </p>

                {/* Panel features */}
                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpPanelChat")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpPanelDelivery")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpPanelClose")}
                    </IconListItem>
                </ul>

                {/* Closing actions */}
                <p className="mt-8 text-base/7 font-semibold text-gray-900 dark:text-white">
                    {t("massageStudio.mvpClosingIntro")}
                </p>

                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpClosingCalendar")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpClosingDb")}
                    </IconListItem>
                </ul>

                {/* Calendar sync */}
                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    <Trans
                        i18nKey="massageStudio.mvpSyncTitle"
                        components={[emphasis]}
                    />
                </p>

                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpSyncDelete")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpSyncCancel")}
                    </IconListItem>
                </ul>

                {/* Checkout */}
                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("massageStudio.mvpCheckout")}
                </p>

                {/* SaaS */}
                <p className="mt-10 text-base/7 font-semibold text-gray-900 dark:text-white">
                    {t("massageStudio.mvpSaasIntro")}
                </p>

                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpSaasServices")}
                    </IconListItem>
                    <IconListItem icon={ListIcon}>
                        {t("massageStudio.mvpSaasPromos")}
                    </IconListItem>
                </ul>

                {/* Localization */}
                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    <Trans
                        i18nKey="massageStudio.mvpLocalization"
                        components={[emphasis]}
                    />
                </p>

                {/* Outcome */}
                <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                    {t("massageStudio.mvpOutcome")}
                </p>
            </div>
        </motion.div>
    );
}
