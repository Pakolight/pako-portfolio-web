import type { Transition } from "motion/react"
import { motion } from "framer-motion";

const transition: Transition = {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
}
// const offsetPath = "M 67 329 C 65 347 52 218 131 238 C 202 243 178 198 251 235 C 372 237 312 202 433 236 C 532 243 521 183 604 234"
const offsetPath = "M 66 330 C 203 126 250 439 430 263"

const box: React.CSSProperties = {
    width: 50,
    height: 50,
    borderRadius: 6,
    position: "absolute",
    top: 0,
    left: 0,
    offsetPath: `path("${offsetPath}")`,

}

const horizontalOffset = 20
const leftLogoAnimation = { x: [0, horizontalOffset, 0] }
const rightLogoAnimation = { x: [0, -horizontalOffset, 0] }

interface CurvedTextProps {
    text: string;
    radius?: number;
    className?: string;
    textClassName?: string;
}



export default function LoadingSpinner({text}: {text: string} ) {
    return (
        <div className={"fixed inset-0 z-50 flex items-center justify-center dark:bg-gray-900 backdrop-blur-[1px]"}>
            <div className={"relative left-8.5 flex"}>
                <motion.svg
                    className={"h-20"}
                    width="53"
                    height="923"
                    viewBox="0 0 530 923"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={leftLogoAnimation}
                    transition={transition}
                >
                    <motion.path d="M1.8984 922.25C1.8984 922.25 -1.59722 304.748 0.898402 257.749C3.39403 210.75 19.3911 133.241 83.8916 68.7405C145.178 7.45438 232.487 -0.486144 268.942 0.0218119C270.853 0.0484515 272.672 0.125865 274.392 0.250449C282.292 0.822845 289.653 1.18325 296.713 1.52891C334.78 3.3926 364.095 4.82779 421.892 36.7503L529.897 14.2504C529.897 14.2504 489.468 27.0799 450.892 56.6137C434.027 69.5253 417.516 85.6294 404.892 105.25C363.392 169.75 361.398 226.25 361.398 226.25V522.75V922.25H238.397H1.8984Z" fill="#6564F8"/>
                </motion.svg>

                <motion.svg
                    className={"relative right-8.5 h-20"}
                    width="66.6"
                    height="924"
                    viewBox="0 0 666 924"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={rightLogoAnimation}
                    transition={transition}
                >
                    <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M35.9942 1.8667C34.2747 1.74212 32.456 1.6647 30.5442 1.63806C168.629 2.55747 275.994 -2.64339 410.001 1.86566C544.007 6.37471 662.112 31.8648 665.001 279.866C667.89 527.866 504.507 558.875 436.501 560.366C368.494 561.857 252.001 560.366 252.001 560.366V923.866H123V524.366C200.178 498.066 290.882 418.366 304 290.866C304 290.866 308.994 216.366 284.994 159.366C260.994 102.366 212.494 58.2299 212.494 58.2299C251.071 28.6961 291.5 15.8666 291.5 15.8666L183.494 38.3665C125.697 6.44405 96.3827 5.00885 58.316 3.14516C51.2557 2.7995 43.8943 2.4391 35.9942 1.8667Z" fill="#A974FC"/>
                    <motion.path d="M0 540.365V923.866H123V524.366C57.6797 546.625 0 540.365 0 540.365Z" fill="#A974FC"/>
                    <motion.path d="M0 540.365V923.866H123V524.366C57.6797 546.625 0 540.365 0 540.365Z" fill="#6564F8" fill-opacity="0.5"/>
                </motion.svg>
            </div>
        </div>
    )
}
