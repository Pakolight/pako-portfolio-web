import { MinusIcon,  } from '@heroicons/react/20/solid'
import {useParams, Outlet} from "react-router";
import {useTranslation} from "react-i18next";
import {Tabs, ContentContainerVsGradient} from "~/components/shared";
import {MedicalBotMermaid} from "~/components/cases";
import type { ComponentType, SVGProps } from "react"
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}


export default function CaseSnowBus() {
    const tabs = [
        { name: 'Problem & solution', to: 'problem-solution'},
        { name: 'MVP & Early Results', to: 'mvp'},
        { name: 'Roadmap', to: 'roadmap'},
        { name: 'Value for Businesses', to: 'values-for-business'},
        { name: 'Technology Stack', to: 'techstack'},
    ]

    const langParam = useParams().lang;
    let lang = "eu"
    if (langParam) {
        lang = langParam;
    }
    const {t} =  useTranslation();
    const emphasis = <span className="italic font-bold" />
    // Any heroicon from '@heroicons/react/20/solid' will fit this type
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-900">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <ContentContainerVsGradient/>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className={"absolute top-5"}>
                            <Tabs tabs={tabs}/>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{t("massageStudio.message")}</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                                {t("massageStudio.title")}
                            </h1>
                            <Outlet/>

                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={`/public/img/medical-bot/medical-bot-${lang}.svg`}
                        className="p-10 w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
                    />
                    {/*<MedicalBotMermaid/>*/}
                </div>

            </div>
        </motion.div>
    )
}
