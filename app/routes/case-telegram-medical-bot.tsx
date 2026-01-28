import type { Route } from "./+types/home";
import { MinusIcon,  } from '@heroicons/react/20/solid'
import {useParams, Outlet, useLocation, Route} from "react-router";
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
        { title: "Medical Services Platform — Case Study" },
        {
            name: "description",
            content:
                "Messenger-first intake and booking platform with CRM integration, payments, and a roadmap toward embedded web UI and AI-assisted workflows.",
        },
    ];
}


export default function CaseTelegramMedicalBot() {
    const {t} =  useTranslation();
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
        { name: t("medicalBot.title"), to: 'problem-solution'},
        { name: t("medicalBot.MVPHeading"), to: 'mvp'},
        { name: t("medicalBot.roadmapTitle"), to: 'roadmap'},
        { name: t("medicalBot.valueTitle"), to: 'values-for-business'},
        { name: t("medicalBot.techStackTitle"), to: 'techstack'},
    ]

    const langParam = useParams().lang;
    let lang = "eu"
    if (langParam) {
        lang = langParam;
    }
    const emphasis = <span className="italic font-bold" />
    // Any heroicon from '@heroicons/react/20/solid' will fit this type
    type IconType = ComponentType<SVGProps<SVGSVGElement>>;
    const ListIcon: IconType = MinusIcon;

    const location = useLocation()
    const imageTag = location.pathname.split("/").at(-1)
    const imageSrc = imageTag === "roadmap"
        ? `/public/img/medical-bot/roadmap-${lang}.png`
        : ['problem-solution', "mvp", 'values-for-business', 'techstack'].includes(imageTag)
            ? `/public/img/medical-bot/medical-bot-${lang}.svg`
            : null;

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
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className={"absolute top-5"}>
                            <Tabs tabs={tabs}/>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{t("medicalBot.message")}</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                                {t("medicalBot.title")}
                            </h1>
                            <Outlet/>

                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {imageSrc &&
                        <div
                            className="group relative w-full overflow-hidden rounded-xl dark:bg-gray-900 shadow-xl ring-1 ring-gray-400/10 dark:bg-gray-800 dark:ring-white/10 lg:mx-auto "
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
                                alt=""
                                src={imageSrc}
                                className="block h-auto w-full cursor-zoom-in transition-transform duration-500 ease-out"
                                style={{
                                    transformOrigin: "70% 35%",
                                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${isZoomed ? 2.5 : 1})`,
                                }}
                            />
                        </div>
                    }
                    {/*<MedicalBotMermaid/>*/}
                </div>

            </div>
        </motion.div>
    )
}
