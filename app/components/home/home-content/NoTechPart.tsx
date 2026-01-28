import {motion} from "framer-motion";
import {Trans, useTranslation} from "react-i18next";

export function NoTechPart() {

    const emphasis = <span className="italic font-bold" />
    const {t} = useTranslation();

    return <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            {t("homeContent.minTitle")}
        </p>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
            {t("homeContent.nonTechDescription")}
        </motion.p>
        <article className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-8 lg:grid-rows-2">
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="flex p-px lg:col-span-5">
                <div className="pt-8 w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                    {/*<div className="mx-2 bg-[url('/img/home-context/inBrowserMobile.png')] md:bg-[url('/img/home-context/inBrowser.png')] bg-cover h-80 bg-[position:center_-5%] md:bg-contain md:bg-no-repeat"/>*/}
                    <div className="mx-2 bg-[url('/img/home-context/inBrowserMobile.png')]
                                        lg:bg-[url('/img/home-context/inBrowser.png')]
                                        h-80 bg-[position:center_45%] bg-contain bg-no-repeat  md:bg-[position:center_40%] "/>
                    <div className="px-8">
                        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">{t("homeContent.noTechFront")}</h2>
                        <p className="mb-6 text-base/7 text-gray-600 dark:text-gray-400">
                            <Trans
                                i18nKey="homeContent.noTechFrontSection"
                                components={[
                                    <span className="text-2xl italic font-bold" />,
                                    <span className="italic font-bold" />,
                                    <span className="italic font-bold" />,
                                    <span className="italic font-bold" />,
                                    <span className="italic font-bold" />,
                                ]}
                            />
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="flex p-px lg:col-span-3">
                <div className="pt-8 w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                    <div className="
                                        mx-2 bg-[url('/img/home-context/backEnd.png')]
                                        h-80 bg-[position:center_45%] bg-contain bg-no-repeat  md:bg-[position:center_40%] "/>
                    <div className="px-8">
                        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                            {t("homeContent.noTechBackend")}
                        </h2>
                        <p className="mb-8 text-base/7 text-gray-600 dark:text-gray-400">
                            <Trans
                                i18nKey="homeContent.backendPhilosophy"
                                components={[
                                    <span className="text-2xl italic font-bold" />,
                                    emphasis,
                                    emphasis,
                                    emphasis,
                                    emphasis,
                                    emphasis,
                                ]}
                            />
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="flex p-px lg:col-span-4">
                <div className="pt-8 w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                    <div className="
                                        mx-2 bg-[url('/img/home-context/IsometricAI.png')]
                                        h-80 bg-[position:center_45%] bg-contain bg-no-repeat  md:bg-[position:center_40%]"/>
                    <div className="p-10">
                        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                            {t("homeContent.AIAssistedSolutions")}
                        </h2>
                        <p className="indent-2 mb-8 text-base/7 text-gray-600 dark:text-gray-400">
                            <Trans
                                i18nKey="homeContent.noTechAISection"
                                components={[
                                    <span className="text-2xl italic font-bold" />,
                                    <span className="italic font-bold" />,
                                    <span className="italic font-bold" />,
                                ]}
                            />
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="flex p-px lg:col-span-4">
                <div className="pt-8 w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
                    <div className="
                                        mx-2 bg-[url('/img/home-context/businessStrategies.png')]
                                        h-80 bg-[position:center_45%] bg-contain bg-no-repeat  md:bg-[position:center_40%] "/>
                    <div className="p-10">
                        {/*<h2 className="mb-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">*/}
                        {/*    Lightning-fast builds*/}
                        {/*</h2>*/}
                        <p className="indent-2 text-base/7 text-gray-600 dark:text-gray-400">
                            <Trans
                                i18nKey="homeContent.aiApproach"
                                components={[
                                    emphasis,
                                    emphasis,
                                    emphasis,
                                    emphasis,
                                ]}
                            />
                        </p>
                    </div>
                </div>
            </motion.div>
        </article>
    </div>
}