import { useLocation, useNavigate, useParams } from "react-router"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface Language {
    lang: string,
    name: string,
    icon: string,
}

export default function LanguageSwitcher() {
    const navigate = useNavigate();
    const { lang } = useParams();
    const location = useLocation();


    const languages: Language[] = [
        {
            lang: "en",
            name: "English",
            icon: "../../public/img/en.svg"
        },
        {
            lang: "pl",
            name: "Polski",
            icon: "../../public/img/pl.svg"
        },
        {
            lang: "ua",
            name: "Українська",
            icon: "../../public/img/ua.svg"
        },
        {
            lang: "ru",
            name: "Русский",
            icon: "../../public/img/ru.svg"
        }
    ]
    const styleLangIcon =
        "size-8 shrink-0 rounded-full border-2 border-white/80 outline outline-1 outline-emerald-600/80"

    const handleSelectLanguage = (nextLang: string) => {
        navigate(nextLang)
    }

    return (
        <Menu as="div" className="relative ml-3">
            <MenuButton
                className="flex rounded-full bg-white/90 p-0.5 text-sm  outline-indigo-500/70 outline-offset-2 transition focus-visible:outline-indigo-500 dark:bg-indigo-800/50 dark:outline-indigo-400/70"
            >
                {languages.map((l) => (
                    l.lang === lang && (
                        <img className={styleLangIcon} src={l.icon} alt={l.name} key={l.lang} />
                    )
                ))}
            </MenuButton>
            <MenuItems
                className="absolute -right-3 z-20 mt-2  origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-hidden dark:bg-indigo-800/50 dark:ring-white/10"
            >
                {languages.map((l) => (
                    <MenuItem key={l.lang}>
                        {({ active }) => (
                            <button
                                type="button"
                                onClick={() => handleSelectLanguage(location.pathname.replace(/\w{2}/, l.lang))}
                                className={[
                                    "flex w-full items-center gap-2 rounded-md p-1.5 text-left text-sm transition",
                                    active
                                        ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white"
                                        : "text-gray-700 dark:text-gray-100",
                                ].join(" ")}
                            >
                                <img className={styleLangIcon} src={l.icon} alt={l.name} />
                                <span className="block md:hidden">{l.lang.toUpperCase()}</span>
                            </button>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}
