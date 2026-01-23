import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid'
import { Link, NavLink, useLocation } from "react-router"
import { useScroll, useMotionValueEvent } from "motion/react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface Tab {
    name: string
    to: string
    current?: boolean
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
    const isActiveNavClass =
        "p-2 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 transition-background duration-50"
    const basicNavClass =
        "p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-md px-3 py-2 text-sm font-medium active:transform"

    const [next, setNext] = useState<Tab | null>(null)
    const [previous, setPrevious] = useState<Tab | null>(null)

    const location = useLocation()
    const { scrollY } = useScroll()
    const { t } = useTranslation()

    const TOP_THRESHOLD = 8

    const [isAtTop, setIsAtTop] = useState(true)
    const [visible, setVisible] = useState(true) // навигация показана/скрыта

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() ?? 0

        const atTop = latest <= TOP_THRESHOLD
        setIsAtTop(atTop)

        if (atTop) {
            // в самом верху всегда показываем и без blur
            setVisible(true)
            return
        }

        // не вверху:
        if (latest > prev) {
            // скролл вниз -> скрыть
            setVisible(false)
        } else if (latest < prev) {
            // скролл вверх -> показать (и будет blur, потому что !isAtTop)
            setVisible(true)
        }
    })

    useEffect(() => {
        tabs.forEach((tab, index) => {
            if (location.pathname.split("/").includes(tab.to)) {
                tabs.length > index + 1 ? setNext(tabs[index + 1]) : setNext(null)
                index !== 0 ? setPrevious(tabs[index - 1]) : setPrevious(null)
            }
        })
    }, [location, tabs])

    return (
        <>
            {/* MOBILE */}
            <div
                className={[
                    "fixed w-screen -mx-8 px-8 flex items-center justify-between sm:hidden h-10",
                    "transition-all duration-200 transition-top ease-in-out duration-75",
                    visible ? " translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none",
                    !isAtTop ? "top-0 backdrop-blur-md" : "attop top-15 top-0",
                ].join(" ")}
            >
                {previous ? (
                    <Link
                        to={previous.to}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                        <ArrowLeftIcon aria-hidden="true" className="size-5 fill-gray-500 dark:fill-gray-400" />
                        <p className="text-sm">{t("tabs.previousPage")}</p>
                    </Link>
                ) : (
                    <div />
                )}

                {next ? (
                    <Link
                        to={next.to}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                        <p className="text-sm">{t("tabs.nextPage")}</p>
                        <ArrowRightIcon aria-hidden="true" className="size-5 fill-gray-500 dark:fill-gray-400" />
                    </Link>
                ) : (
                    <div />
                )}
            </div>

            {/* DESKTOP */}
            <div className="hidden sm:block">
                <nav aria-label="Tabs" className="flex space-x-4">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.name}
                            to={tab.to}
                            aria-current={tab.current ? "page" : undefined}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? `pending ${basicNavClass}`
                                    : isActive
                                        ? isActiveNavClass
                                        : basicNavClass
                            }
                        >
                            {tab.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    )
}
