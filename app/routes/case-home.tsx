import {CasesGreed, CasesHero} from "app/components/cases";
import {ContentContainerVsGradient} from "~/components/shared";
import {motion} from "motion/react"
import type { LoaderFunctionArgs } from "react-router";



export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export default function CaseHome() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>

            <CasesHero title={`The cases which I praud of`} description={false}/>
            <ContentContainerVsGradient>
                <CasesGreed/>
            </ContentContainerVsGradient>
        </motion.div>
    )
}



