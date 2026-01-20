import { useNavigate, useParams } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useLocation } from "react-router";


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
    const styleLangIcon = "w-8 h-8 border-2 border-wight outline-1 outline-emerald-600 rounded-full z-6"

    const handleSelectLanguage = (lang: string) => {
        return (navigate(lang))
    }

    return(<Menu as="div" className="relative ml-3 group">
        <div>
            <MenuButton className="md:relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-hidden">
                {languages.map((l, index) => (
                    l.lang === lang && <img className={styleLangIcon} src={l.icon} alt={l.name} key={index}/>
                ))}
            </MenuButton>
        </div>
        <MenuItems>
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-100%)" }}
                animate={{ opacity: 1, transform: "translateY(0%)" }}
                exit={{ opacity: 0, transform: "translateY(-100%)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="langugeBox flex flex-col items-center justify-center bg-white rounded-lg shadow-lg relative top-15 left-2 p-2 gap-2"
            >

                {languages.map((l, index) => (
                    <div className={"flex flex-row gap-1 justify-center items-center cursor-pointer"}>
                        <img onClick={() => handleSelectLanguage(location.replace(/\w{2}/, l.lang))}
                             className={styleLangIcon}
                             src={l.icon} alt={l.name}
                             key={index}
                        />
                        <p className="text-black block md:hidden" >{l.lang.toUpperCase()}</p>
                    </div>
                ))}
            </motion.div>
        </MenuItems>
    </Menu>)

}



