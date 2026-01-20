import type { Transition } from "motion/react"
import { motion } from "framer-motion";

const transition: Transition = {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
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

interface CurvedTextProps {
    text: string;
    radius?: number;
    className?: string;
    textClassName?: string;
}



export default function LoadingSpinner({text}: {text: string} ) {
    return (
        <div style={{ position: "relative" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="451"
                height="437"
            >
                <motion.path
                    d={`${offsetPath}`}
                    fill="transparent"
                    strokeWidth="6"
                    stroke="#427646"

                    strokeLinecap="round"
                    initial={{ pathLength: 0.001 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
                <motion.path
                    d={`${offsetPath}`}
                    fill="transparent"
                    strokeWidth="8"
                    stroke="#427646"
                    className={"blur"}
                    strokeLinecap="round"
                    initial={{ pathLength: 0.001 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
            </svg>
            <motion.div
                style={box}
                initial={{ offsetDistance: "0%", scale: 2.5 }}
                animate={{ offsetDistance: "100%", scale: 1 }}
                transition={transition}
            >
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <motion.polygon 
                        points="25,5 45,20 37,43 13,43 5,20"
                        fill="none"
                        stroke="#427646"
                        strokeWidth="2"
                        animate={{ rotate: 360 }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                    />
                </svg>
            </motion.div>
            <motion.div
                style={box}
                initial={{ offsetDistance: "0%", scale: 2.5 }}
                animate={{ offsetDistance: "100%", scale: 1 }}
                transition={transition}
                className={"blur opacity-50"}
            >
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <motion.polygon 
                        points="25,5 45,20 37,43 13,43 5,20"
                        fill="none"
                        stroke="#427646"
                        strokeWidth="3"
                        animate={{ rotate: 360 }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                    />
                </svg>
            </motion.div>
            <motion.div
                style={{...box, }}
                initial={{ offsetDistance: "0%", scale: 0 }}
                animate={{ offsetDistance: "10%", scale: 2.5 }}
                transition={transition}
            >
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <motion.polygon 
                        points="25,5 45,20 37,43 13,43 5,20"
                        fill="#427646"
                        stroke="#427646"
                        strokeWidth="1"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    />
                </svg>
            </motion.div>

        </div>
    )
}


const CurvedText = ({
                        text,
                        radius = 80,
                        className = "",
                        textClassName = "fill-current text-4xl text-[#427646]"
                    }: CurvedTextProps) => {
    const svgSize = radius * 2 + 40;
    const center = svgSize / 2;

    return (
        <div className={`relative inline-flex items-center justify-center w-12 h-12 ${className}`}>
            <svg
                viewBox={`0 0 ${svgSize} ${svgSize}`}
                className="w-full h-full"
            >
                <defs>
                    <path
                        id="arc"
                        d={`M ${center - radius * 0.7} ${center + radius * 0.5} 
                            A ${radius} ${radius} 0 0 1 ${center + radius * 0.7} ${center + radius * 0.5}`}
                    />
                </defs>

                <motion.text
                    className={`font-bold ${textClassName}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    textAnchor="middle"
                >
                    <textPath href="#arc" startOffset="50%">
                        {text}
                    </textPath>
                </motion.text>
            </svg>
        </div>
    );
};
