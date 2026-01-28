import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useLocation, useNavigate, useParams, Link } from "react-router"


const solutions = [
    { name: 'en', description: 'English', icon: "../../public/img/en.svg" },
    { name: 'nl', description: 'Nederlands', icon: "../../public/img/nl.svg" },
    { name: 'pl', description: 'Polski', icon: "../../public/img/pl.svg" },
    { name: 'ua', description: "Українська", icon: "../../public/img/ua.svg" },
    { name: 'ru', description: 'Русский', icon: "../../public/img/ru.svg" }
]


export default function Example() {
    // const navigate = useNavigate();
    const { lang } = useParams();
    const location = useLocation();

    return (
        <Popover className="relative px-2">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                <img className={"size-8"} src={"../../public/img/en.svg"} alt={""}></img>
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
                <div className="relative right-1/2 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div className="p-4">
                        {solutions.map((item) => (
                            <div
                                key={item.name}
                                className="group relative flex gap-x-4 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-white/5"
                            >
                                <div className="mt-1.5 flex size-9 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                    <img  src={item.icon} alt=""/>
                                </div>
                                <div>
                                    <Link to={location.pathname.replace(/\/\w{2}\//, (item.name + "/") )} className="font-semibold text-gray-900 dark:text-white">
                                        {item.name.toUpperCase()}
                                        <span className={"absolute inset-0"}></span>
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">

                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}

