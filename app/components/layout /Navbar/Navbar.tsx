//TODO: Add languige selaction

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useParams } from "react-router";
import { useTranslation } from "react-i18next";

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { lang } = useParams()
  const { t } = useTranslation()

  const navigation = [
    { name: t('navigation.home'), to: `/${lang}/home` },
    { name: t('navigation.cases'), to: `/${lang}/cases` },
    { name: t('navigation.techniques'), to: `/${lang}/#` },
  ]

  const base = "rounded-md px-3 py-2 text-sm font-medium"
  const active = "bg-gray-900 text-white dark:bg-gray-950/50"
  const inactive = "text-gray-300 hover:bg-white/5 hover:text-white"

  return (
      <Disclosure
          as="nav"
          className="relative z-10 top-0 left-0 bg-gray-800 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
      >
        {({ open, close }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
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
