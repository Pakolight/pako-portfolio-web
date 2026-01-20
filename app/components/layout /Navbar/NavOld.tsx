
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavLink, useParams} from "react-router";
import { useTranslation } from "react-i18next";
import {LanguageSwitcher} from "~/components/shared";

export default function Navbar({className, }: {className?: string, }) {
  const linkStyle: string = "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100"
  const visibleNaavbarClass = "shadow-sm fixed top-0 left-0 inset-x-0 z-10 bg-white dark:bg-gray-900 "
  const bluredNavbarClass = "blur-xl opacity-75 top-"
  const {lang} = useParams()
  const {t} = useTranslation()


  return (
    <Disclosure as="nav" className={visibleNaavbarClass + (className ? " " + className : "") }>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </div>
            <div className="hidden md:block sm:ml-6 sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                to={`/${lang}/home`}
                // className={"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active {${linkStyle}` : linkStyle
                }
              >
                {t('navigation.home')}
              </NavLink>
              <NavLink
                to={`/${lang}/cases`}
                // className={"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active {${linkStyle}` : linkStyle
                }
              >
                {t('navigation.cases')}
              </NavLink>
              <NavLink
                to={`/${lang}/massage-techniques`}
                // className={"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active {${linkStyle}`: linkStyle
                }
              >
                {t('navigation.techniques')}
              </NavLink>

            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LanguageSwitcher/>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 group">
              <div>
                {/*<MenuButton className="md:relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">*/}
                {/*  <span className="absolute -inset-1.5" />*/}
                {/*  <span className="sr-only">Open user menu</span>*/}

                {/*  <svg width="30" height="30" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M228.891 61.8481C233.656 51.477 230.063 38.7328 220.922 33.3715C211.781 28.0101 200.375 32.0531 195.609 42.3363L122.875 199.749H56C42.1719 199.749 31 212.317 31 227.874C31 243.431 42.1719 255.999 56 255.999L96.5469 438.373C102.094 463.422 122.094 481 145.063 481H366.938C389.906 481 409.906 463.422 415.453 438.373L456 255.999C469.828 255.999 481 243.431 481 227.874C481 212.317 469.828 199.749 456 199.749H389.125L316.391 42.3363C311.625 32.0531 300.297 28.0101 291.078 33.3715C281.859 38.7328 278.344 51.477 283.109 61.8481L346.859 199.749H165.141L228.891 61.8481ZM181 298.187V382.562C181 390.297 175.375 396.625 168.5 396.625C161.625 396.625 156 390.297 156 382.562V298.187C156 290.452 161.625 284.124 168.5 284.124C175.375 284.124 181 290.452 181 298.187ZM256 284.124C262.875 284.124 268.5 290.452 268.5 298.187V382.562C268.5 390.297 262.875 396.625 256 396.625C249.125 396.625 243.5 390.297 243.5 382.562V298.187C243.5 290.452 249.125 284.124 256 284.124ZM356 298.187V382.562C356 390.297 350.375 396.625 343.5 396.625C336.625 396.625 331 390.297 331 382.562V298.187C331 290.452 336.625 284.124 343.5 284.124C350.375 284.124 356 290.452 356 298.187Z" fill="#34966A"/>*/}
                {/*  </svg>*/}

                {/*      :*/}
                {/*  <svg  className={"group-hover:rotate-90 transition delay-150 duration-300 ease-in-out"} width="30" height="30" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M255.6 44.5C276.955 44.5 294.7 62.2124 294.7 84.5996C294.7 106.987 276.955 124.7 255.6 124.7C234.244 124.7 216.5 106.987 216.5 84.5996C216.5 62.2125 234.244 44.5002 255.6 44.5Z" stroke="#34966A" strokeWidth="27"/>*/}
                {/*    <path d="M255.6 216.02C276.955 216.02 294.7 233.732 294.7 256.12C294.7 278.507 276.955 296.22 255.6 296.22C234.244 296.22 216.5 278.507 216.5 256.12C216.5 233.732 234.244 216.02 255.6 216.02Z" stroke="#34966A" strokeWidth="27"/>*/}
                {/*    <path d="M255.6 387.54C276.955 387.54 294.7 405.252 294.7 427.64C294.7 450.027 276.955 467.74 255.6 467.74C234.244 467.74 216.5 450.027 216.5 427.64C216.5 405.253 234.244 387.54 255.6 387.54Z" stroke="#34966A" strokeWidth="27"/>*/}
                {/*  </svg>*/}




                {/*</MenuButton>*/}
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >

              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
              as={NavLink}
              to={`/${lang}/home`}
              className={({ isActive, isPending }) =>
                  `block border-l-4 py-2 pr-4 pl-3 text-base font-medium ${
                      isActive
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  }`
              }
          >
            {t('navigation.home')}
          </DisclosureButton>

          <DisclosureButton
              as={NavLink}
              to={`/${lang}/services`}
              className={({ isActive, isPending }) =>
                  `block border-l-4 py-2 pr-4 pl-3 text-base font-medium ${
                      isActive
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  }`
              }
          >
            {t('navigation.services')}
          </DisclosureButton>
          <DisclosureButton
              as={NavLink}
              to={`/${lang}/massage-techniques`}
              className={({ isActive, isPending }) =>
                  `block border-l-4 py-2 pr-4 pl-3 text-base font-medium ${
                      isActive
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  }`
              }
          >
            {t('navigation.techniques')}
          </DisclosureButton>


        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
