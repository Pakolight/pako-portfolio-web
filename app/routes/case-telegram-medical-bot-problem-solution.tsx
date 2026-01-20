import { MinusIcon,} from '@heroicons/react/20/solid'
import {useTranslation} from "react-i18next";
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export default function CaseTelegramMedicalBotProblems() {
    const {t} =  useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="lg:pr-4 mb-8">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.problemHeading")}

                </h2>
                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {t("medicalBot.problemDescription")}
                </p>

                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("medicalBot.resulted")}
                </h2>

                <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                         {t("medicalBot.highLoad")}
                                        </span>
                    </li>
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                         {t("medicalBot.delayedRequests")}

                                        </span>
                    </li>
                    <li className="flex gap-x-2">
                        <MinusIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                        />
                        <span>
                                         {t("medicalBot.conversion")}
                                        </span>
                    </li>
                </ul>

            </div>
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg dark:text-gray-400 ">
            <h2 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("medicalBot.solutionHeading")}
            </h2>
            <p className="mt-8">
                {t("medicalBot.solutionDescription")}
            </p>

            <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex gap-x-2">
                    <MinusIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                    />
                    <span>
                                         {t("medicalBot.highLoad")}
                                        </span>
                </li>
                <li className="flex gap-x-2">
                    <MinusIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                    />
                    <span>
                                         {t("medicalBot.liBooking")}

                                        </span>
                </li>
                <li className="flex gap-x-2">
                    <MinusIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                    />
                    <span>
                                         {t("medicalBot.liSurgical")}
                                        </span>
                </li>
            </ul>

        </div>
        </motion.div>

    )
}
