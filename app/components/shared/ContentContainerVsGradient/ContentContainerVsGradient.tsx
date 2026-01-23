import React, { useMemo, useRef } from "react"
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"


const TOP_CLIP =
    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"

const BOTTOM_CLIP =
    "polygon(70.5% 42%, 100% 58%, 95% 24%, 86% 2%, 78% 4%, 70% 30%, 62% 60%, 54% 72%, 46% 62%, 42% 36%, 28% 78%, 2% 62%, 20% 100%, 30% 74%, 78% 98%, 70.5% 42%)"

export default function ContentContainerVsGradient({
    children,
}: {
    children: React.ReactNode
}) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useReducedMotion()

    // Скролл прогресс именно по этому блоку (красиво и предсказуемо)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // 0 когда блок внизу экрана, 1 когда ушел вверх
    })

    // Движение / глубина
    // Spring smoothing reduces micro-updates from scroll for steadier 60fps.
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.4,
    })

    const topY = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [60, -120],
    )
    const topRotate = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [26, 38],
    )
    const topScale = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [1, 1] : [0.98, 1.08],
    )
    const topOpacity = useTransform(
        smoothProgress,
        [0, 0.25, 1],
        prefersReducedMotion ? [1, 1, 1] : [0, 1, 1],
    )

    const bottomY = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [-40, 100],
    )
    const bottomRotate = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [-8, 10],
    )
    const bottomScale = useTransform(
        smoothProgress,
        [0, 1],
        prefersReducedMotion ? [1, 1] : [1.06, 0.98],
    )
    const bottomOpacity = useTransform(
        smoothProgress,
        [0, 0.2, 1],
        prefersReducedMotion ? [1, 1, 1] : [0, 1, 1],
    )

    const topStyle = useMemo(
        () => ({
            y: topY,
            rotate: topRotate,
            scale: topScale,
            opacity: topOpacity,
            willChange: "transform, opacity",
        }),
        [topOpacity, topRotate, topScale, topY],
    )

    const bottomStyle = useMemo(
        () => ({
            y: bottomY,
            rotate: bottomRotate,
            scale: bottomScale,
            opacity: bottomOpacity,
            willChange: "transform, opacity",
        }),
        [bottomOpacity, bottomRotate, bottomScale, bottomY],
    )

    return (
        <div ref={ref} className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* TOP gradient shape */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    style={topStyle}
                >
                    {/* Static clip-path avoids per-frame polygon interpolation. */}
                    <div
                        style={{ clipPath: TOP_CLIP }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </motion.div>

                <div className="mx-auto max-w-350 py-16 sm:24 lg:py-28">
                    <div className="text-center">{children}</div>
                </div>

                {/* BOTTOM gradient shape */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    style={bottomStyle}
                >
                    <div
                        style={{ clipPath: BOTTOM_CLIP }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </motion.div>
            </div>
        </div>
    )
}
