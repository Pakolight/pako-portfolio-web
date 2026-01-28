import type { Route } from "./+types/home";
import {CasesGreed, CasesHero} from "app/components/cases";
import {ContentContainerVsGradient} from "~/components/shared";
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";
import { useTranslation } from 'react-i18next';


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Case Studies — PAKO Kostiantyn Palyvoda" },
        {
            name: "description",
            content:
                "Selected projects: messenger-first booking, flexible service booking websites, and request-driven transportation workflows.",
        },
    ];
}


export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export default function CaseHome() {
    const {t} = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>

            <CasesHero title={t('cases.projects')} description={false}/>
            <ContentContainerVsGradient>
                <CasesGreed/>
            </ContentContainerVsGradient>
        </motion.div>
    )
}



