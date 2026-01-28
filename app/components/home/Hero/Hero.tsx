import { useTranslation } from 'react-i18next';
import {ContactMeDialog} from "~/components/shared";
import {motion} from "motion/react"
import {ContentContainerVsGradient} from "~/components/shared";



export default function Hero() {
    const {t} = useTranslation();

    return (
        <div className="bg-white dark:bg-gray-900 lg:h-screen">
            <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 dark:from-indigo-950/10">
                <div className="mx-auto max-w-7xl pt-10 pb-16 sm:pb-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <div className="flex justify-between">

                                    {/*<img*/}
                                    {/*    alt="Your Company"*/}
                                    {/*    src="/img/PaKoLogo.svg"*/}
                                    {/*    className="h-11 dark:hidden"*/}
                                    {/*/>*/}
                                    {/*<img*/}
                                    {/*    alt="Your Company"*/}
                                    {/*    src="/img/PaKoLogo.svg"*/}
                                    {/*    className="h-11 not-dark:hidden"*/}
                                    {/*/>*/}
                                    <div className="inline-block rounded-full bg-gradient-to-bl from-indigo-500 to-purple-500 p-1 lg:hidden">
                                        <div className="size-14
                                                      rounded-full
                                                      bg-[url('/img/pakoAvatar.webp')]
                                                      bg-cover
                                                      bg-[position:center_20%]
                                                      ring-1 ring-black/5
                                                      dark:ring-white/10"/>
                                        </div>
                                    </div>
                    {/*            <div className="mt-24 sm:mt-32 lg:mt-16">*/}
                    {/*                <a href="#" className="inline-flex space-x-6">*/}
                    {/*<span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/25">*/}
                    {/*  What's new*/}
                    {/*</span>*/}
                    {/*                    <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">*/}
                    {/*  <span>Just shipped v1.0</span>*/}
                    {/*  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400 dark:text-gray-500" />*/}
                    {/*</span>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                                    {t('hero.title')}
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                                    {t('hero.description')}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <ContactMeDialog/>
                                    {/*<a href="https://github.com/Pakolight" className="text-sm/6 font-semibold text-gray-900 dark:text-white">*/}
                                    {/*    {t('hero.myGitHub')} <span aria-hidden="true">→</span>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="  mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36 dark:bg-gray-800/30 dark:shadow-indigo-400/10 dark:ring-white/5"
                        />


                        <div className="">
                            <div
                                className="relative bg-gradient-to-r from-indigo-500 to-purple-500 [clip-path:inset(0)]"
                                style={{
                                    clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
                                }}

                            >
                                <div className="relative top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                                     style={{
                                         clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
                                     }}/>
                                <div className={"hidden md:flex font-mono drop-shadow-xl shadow-2xs font-bold text-l z-10 absolute top-40 left-10 text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500  justify-center w-fit rounded-3xl border-indigo-600 _dark:outline-[#151D2E] border-4 outline-4 outline-indigo-400"}>Node.js</div>
                                <div className={"hidden font-mono drop-shadow-xl font-bold text-l z-10 absolute top-15 left-120 text-white p-2 bg-gradient-to-l from-indigo-500 to-purple-500 md:md:flex justify-center w-fit rounded-3xl border-indigo-500 _dark:outline-[#151D2E] border-4 outline-4 outline-indigo-600"}>React</div>
                                <div className={"hidden font-mono drop-shadow-xl font-bold text-l z-10 absolute top-40 left-100 text-white p-2 bg-gradient-to-l from-indigo-500 to-purple-500 md:flex justify-center w-fit rounded-3xl border-indigo-500 _dark:outline-[#111829] border-4 outline-4 outline-indigo-600"}>Django</div>
                                <div className={"hidden font-mono drop-shadow-xl font-bold text-l z-10 absolute top-120 left-140 text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500 md:flex justify-center w-fit rounded-3xl border-indigo-500 _dark:outline-[#111829] border-4 outline-4 outline-indigo-600"}>AWS</div>
                                <div className={"hidden font-mono drop-shadow-xl font-bold text-l z-10 absolute top-100 left-130 text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500 md:flex justify-center w-fit rounded-3xl border-indigo-500 _dark:outline-[#111829] border-4 outline-4 outline-indigo-600"}>DevOps</div>


                                <div
                                    aria-hidden="true"
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                                />
                                <div className="hidden lg:block relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                                    <div className={`hidden md:block  opacity-0 h-140 w-full bg-[url('/img/pako.avif')] bg-cover bg-center bg-no-repeat bg-origin-border p-3`}/>
                                </div>
                            </div>
                            <div className={`absolute top-45 z-1 h-140 w-140 hidden lg:block`}>
                                <div className={`lg:block absolute z-2  h-140 w-140 bg-[url('/img/pako.avif')] bg-cover bg-center bg-no-repeat bg-origin-border p-3`}/>
                                <div className={"font-bold drop-shadow-xl text-l z-10 absolute top-65 left-10 text-white p-2 bg-gradient-to-l from-indigo-500 to-purple-500 lg:flex justify-center w-fit rounded-3xl border-indigo-600 _dark:outline-[#111829] border-4 outline-4 outline-indigo-400"}>Python</div>
                                <div className={"drop-shadow-xl font-mono font-bold text-l z-30 absolute top-80 left-80 text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500 lg:flex justify-center w-fit rounded-3xl border-indigo-500 _dark:outline-[#111829] border-4 outline-4 outline-indigo-600"}>Individual solutions</div>
                                <div className={`lg:block absolute opacity-30 z-0 hue-rotate-180 right-2 -top-2 h-140 w-140 bg-[url('/img/pako.avif')] bg-cover bg-center bg-no-repeat bg-origin-border p-3`}/>
                            </div>
                            <div className={`hidden md:block lg:hidden absolute opacity-20 z-0 hue-rotate-180 right-2 -top-2 h-140 w-140 bg-[url('/img/pako.avif')] bg-cover bg-center bg-no-repeat bg-origin-border p-3`}/>

                        </div>

                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" />
            </div>
        </div>
    )
}
