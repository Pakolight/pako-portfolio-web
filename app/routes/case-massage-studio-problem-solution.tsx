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
        { title: "Massage Booking Website — Problem & Solution" },
        {
            name: "description",
            content:
                "A simple workflow for a non-technical owner: service selection, request-based booking, and messenger-first coordination—without rigid schedules.",
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
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                <div className="lg:max-w-lg">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("massageStudio.problemSolutionTitle")}
                    </h2>

                    <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        {t("massageStudio.problemIntro")}
                    </p>

                    <h3 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white">
                        {t("massageStudio.constraintTitle")}
                    </h3>

                    <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                        <Trans
                            i18nKey="massageStudio.constraintText"
                            components={[
                                <span className="italic font-bold"/>,
                                <span className="italic font-bold"/>,
                            ]}
                        />
                    </p>

                    <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("massageStudio.noClassicBooking")}
                    </p>

                    <h3 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t("massageStudio.solutionTitle")}
                    </h3>

                    <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("massageStudio.solutionIntro")}
                    </p>

                    <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("massageStudio.storefrontIntro")}
                    </p>

                    <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                        <IconListItem icon={ListIcon}>
                            {t("massageStudio.flowSelectService")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("massageStudio.flowChooseWindow")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("massageStudio.flowCheckout")}
                        </IconListItem>
                        <IconListItem icon={ListIcon}>
                            {t("massageStudio.flowSubmitRequest")}
                        </IconListItem>
                    </ul>

                    <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
                        {t("massageStudio.solutionOutcome")}
                    </p>
                </div>
            </motion.div>
        );
    }}
