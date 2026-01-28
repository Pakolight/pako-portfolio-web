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
        { title: "Passenger Transportation System — Value for Business" },
        {
            name: "description",
            content:
                "Shows how service businesses can operate without owning assets: demand-based operations, partner routing, and internal-first scaling to web products.",
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
                        {t("transportOps.valueTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("transportOps.valueIntro")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.valueAssets")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueDemand")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueNoOverengineering")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueScale")}</IconListItem>
                    </ul>

                    <p className="mt-10 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("transportOps.valueAdaptIntro")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>{t("transportOps.valuePassenger")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueLogistics")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueTours")}</IconListItem>
                        <IconListItem icon={ListIcon}>{t("transportOps.valueMarketplaces")}</IconListItem>
                    </ul>
                </div>
            </motion.div>
        );
    }}
