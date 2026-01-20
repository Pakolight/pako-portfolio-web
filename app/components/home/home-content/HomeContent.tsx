import {Trans, useTranslation} from 'react-i18next';
import {useState} from "react";
import { motion } from "framer-motion";
import {TechPart} from "./TechPart";
import {NoTechPart} from "./NoTechPart";

export default function HomeContent() {
    const {t} = useTranslation();
    const active = " underline"
    const [tech, setTech] = useState(false)
    const emphasis = <span className="italic font-bold" />

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-16 px-6 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl  lg:max-w-7xl lg:px-8">

                <div className={"mx-auto flex flex-raw md:gap-4 mb-5 "}>
                    <span onClick={()=> setTech(false)} className={`text-center hover:border-indigo-400 border-2 border-transparent rounded-3xl cursor-pointer text-sm md:text-base/7 font-semibold text-indigo-600 dark:text-indigo-400 p-2 ${tech? "": active}`}>{t('homeContent.partNoTech')}</span>
                    <span onClick={() => setTech(true)} className={`text-center hover:border-indigo-400 border-2 border-transparent rounded-3xl cursor-pointer text-sm md:text-base/7 font-semibold text-indigo-600 dark:text-indigo-400 p-2 ${tech? active: ""}`}>{t('homeContent.partTechSikled')}</span>
                </div>
                <>
                    {!tech
                        ? <NoTechPart/>: <TechPart/>
                    }
                </>
            </div>
        </div>
    )
}
