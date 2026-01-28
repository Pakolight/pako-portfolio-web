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
        { title: "Medical Services Platform — Value for Business" },
        {
            name: "description",
            content:
                "Business outcomes: higher completion rates, lower call-center load, operational transparency, and scalable automation without losing control.",
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
            <div className="lg:max-w-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.valueTitle")}
                </h2>

                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("medicalBot.valueIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.valuePointEntry")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.valuePointAutomation")}</IconListItem>

                    {/* Вариант A: обычный t() */}
                    <IconListItem icon={ListIcon}>{t("medicalBot.valuePointAi")}</IconListItem>

                    {/* Вариант B (если включишь опциональный Trans для valuePointAi):
          <IconListItem icon={ListIcon}>
            <Trans
              i18nKey="medicalBot.valuePointAi"
              components={[emphasis, emphasis]}
            />
          </IconListItem>
          */}
                </ul>

                <p className="mt-10 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("medicalBot.valueAdaptIntro")}
                </p>

                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptMedical")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptServices")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptAppointments")}</IconListItem>
                    <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptSupport")}</IconListItem>
                </ul>
            </div>
        </motion.div>

    )
}
