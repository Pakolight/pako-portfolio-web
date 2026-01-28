import type { Route } from "./+types/home";
import { MinusIcon,  } from '@heroicons/react/20/solid'
import {useParams, Outlet} from "react-router";
import {useTranslation} from "react-i18next";
import {Tabs, ContentContainerVsGradient} from "~/components/shared";
import {MedicalBotMermaid} from "~/components/cases";
import type { ComponentType, SVGProps } from "react"
import {useEffect, useRef, useState} from "react";
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Massage Therapist Portfolio & Booking Website — Case Study" },
        {
            name: "description",
            content:
                "Portfolio + flexible request-based booking with messenger communication and two-way Google Calendar sync for solo practitioners.",
        },
    ];
}


export default function CaseSnowBus() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0,
    });
    const tabs = [
        { name: 'Problem & solution', to: 'problem-solution'},
        { name: 'MVP & Early Results', to: 'mvp'},
        { name: 'Roadmap', to: 'roadmap'},
        { name: 'Value for Businesses', to: 'values-for-business'},
        { name: 'Technology Stack', to: 'techstack'},
    ]

    const langParam = useParams().lang;
    const lang = langParam ?? "eu";
    const [imageLang, setImageLang] = useState(lang);
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

    useEffect(() => {
        function handleWindowMouseUp(event: MouseEvent) {
            if (event.button === 0) {
                dragState.current.isDragging = false;
            }
        }

        window.addEventListener("mouseup", handleWindowMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleWindowMouseUp);
        };
    }, []);

    useEffect(() => {
        setImageLang(lang);
    }, [lang]);

    function handleImageMouseDown(event: React.MouseEvent) {
        if (event.button !== 0) {
            return;
        }

        event.preventDefault();
        dragState.current.isDragging = true;
        dragState.current.startX = event.clientX;
        dragState.current.startY = event.clientY;
        dragState.current.originX = panOffset.x;
        dragState.current.originY = panOffset.y;
    }

    function handleImageMouseMove(event: React.MouseEvent) {
        if (!dragState.current.isDragging) {
            return;
        }

        event.preventDefault();
        const deltaX = event.clientX - dragState.current.startX;
        const deltaY = event.clientY - dragState.current.startY;
        setPanOffset({
            x: dragState.current.originX + deltaX,
            y: dragState.current.originY + deltaY,
        });
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
            <div className="lg:h-screen  mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
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
                    <div
                        className="group relative w-3xl max-w-none overflow-hidden rounded-xl dark:bg-gray-900 p-10 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
                        onContextMenu={(event) => event.preventDefault()}
                        onMouseDown={handleImageMouseDown}
                        onMouseMove={handleImageMouseMove}
                        onMouseLeave={() => {
                            dragState.current.isDragging = false;
                            setIsZoomed(false);
                            setPanOffset({ x: 0, y: 0 });
                        }}
                        onMouseUp={() => {
                            dragState.current.isDragging = false;
                        }}
                        onMouseEnter={() => setIsZoomed(true)}
                    >
                        <img
                            alt="massage-studio-chart-en"
                            src={`/public/img/massage-studio/massage-studio-chart-${imageLang}.webp`}
                            onError={() => {
                                if (imageLang !== "en") {
                                    setImageLang("en");
                                }
                            }}
                            className="block h-auto w-full cursor-zoom-in transition-transform duration-500 ease-out"
                            style={{
                                transformOrigin: "70% 35%",
                                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${isZoomed ? 1.6 : 1})`,
                            }}
                        />
                    </div>
                    {/*<MedicalBotMermaid/>*/}
                </div>

            </div>
        </motion.div>
    )
}
