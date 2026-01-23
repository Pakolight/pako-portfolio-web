//TODO: Make the LanguageSwitcher respond to clicks and to changes of light mode

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { NavLink, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import {LanguageSwitcher} from "../../shared";

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (typeof document === "undefined") return
    let storedTheme: string | null = null

    try {
      storedTheme = localStorage.getItem("theme")
    } catch (e) {
      storedTheme = null
    }

    const nextIsDark = storedTheme === "dark" || storedTheme === null
    setIsDark(nextIsDark)
    document.documentElement.classList.toggle("dark", nextIsDark)
  }, [])

  const handleThemeToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const nextIsDark = !event.target.checked

    setIsDark(nextIsDark)
    document.documentElement.classList.toggle("dark", nextIsDark)

    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    } catch (e) {
      // Ignore storage errors; theme still updates in-session.
    }
  }

  const navigation = [
    { name: t('navigation.home'), to: `/${lang}/home` },
    { name: t('navigation.cases'), to: `/${lang}/cases` },
    { name: t('navigation.techniques'), to: `/${lang}/#` },
  ]

  const base = "rounded-md px-3 py-2 text-sm font-medium"
  const active = "bg-gray-100 text-gray-900 dark:bg-gray-950/50 dark:text-white"
  const inactive =
    "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"

  return (
      <Disclosure
          as="nav"
          className="relative z-10 top-0 left-0 bg-white text-gray-700 shadow-sm dark:bg-gray-800/50 dark:text-gray-200 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
      >
        {({ open, close }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                      <img
                          alt="Your Company"
                          src="/img/PaKoLogo.svg"
                          className="h-8 w-auto"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end
                                className={({ isActive }) =>
                                    classNames(isActive ? active : inactive, base)
                                }
                            >
                              {item.name}
                            </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/*dark-light theme switcher*/}
                  <div className={"group flex flex-row gap-2 align-center"}>
                    <MoonIcon className={"size-5 group-has-checked:opacity-30 transition-opacity duration-200"}/>
                    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring
                    inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out
                    has-checked:bg-indigo-600 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10
                    dark:outline-indigo-500 dark:has-checked:bg-indigo-500">
                      <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                      <input
                          name="setting"
                          type="checkbox"
                          aria-label="Toggle color scheme"
                          checked={!isDark}
                          onChange={handleThemeToggle}
                          className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                      />
                    </div>
                    <SunIcon className={"size-5 block opacity-30 group-has-checked:opacity-100 transition-opacity duration-200"}/>
                  </div>
                  <LanguageSwitcher/>

                </div>
              </div>

              {/* Анимированная панель */}
              <Transition
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
              >
                <DisclosurePanel className="sm:hidden origin-top">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end
                            onClick={() => close()} // закрываем при клике
                            className={({ isActive }) =>
                                classNames(
                                    isActive ? active : inactive,
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )
                            }
                        >
                          {item.name}
                        </NavLink>
                    ))}
                  </div>
                </DisclosurePanel>
              </Transition>
            </>
        )}
      </Disclosure>
  )
}
