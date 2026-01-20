import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import {useParams} from "react-router";
import {Trans, useTranslation} from "react-i18next";
import type { ComponentType, SVGProps } from "react"

export default function CaseTelegramMedicalBot() {
    const langParam = useParams().lang;
    let lang = "eu"
    if (langParam) {
        lang = langParam;
    }
    const {t} =  useTranslation();
    const emphasis = <span className="italic font-bold" />
    // Any heroicon from '@heroicons/react/20/solid' will fit this type
    type IconType = ComponentType<SVGProps<SVGSVGElement>>;
    const ListIcon: IconType = MinusIcon;

    function IconListItem({
                              icon: Icon,
                              children,
                          }: {
        icon: IconType;
        children: React.ReactNode;
    }) {
        return (
            <li className="flex gap-x-2">
                <Icon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                />
                <span>{children}</span>
            </li>
        );
    }

    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-900">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-800"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{t("medicalBot.message")}</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                                {t("medicalBot.title")}
                            </h1>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.problemHeading")}

                            </h2>
                            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                {t("medicalBot.problemDescription")}
                            </p>

                            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.resulted")}
                            </h2>

                            <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.highLoad")}
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.delayedRequests")}

                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.conversion")}
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={`/public/img/medical-bot/medical-bot-${lang}.svg`}
                        className="p-10 w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
                    />
                </div>

                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg dark:text-gray-400">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.solutionHeading")}
                            </h2>
                            <p className="mt-8">
                                {t("medicalBot.solutionDescription")}
                            </p>

                            <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.highLoad")}
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.liBooking")}

                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.liSurgical")}
                                    </span>
                                </li>
                            </ul>
                            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.MVPHeading")}
                            </h2>
                            <p className="mt-6">
                                {t("medicalBot.MVPDescription")}
                            </p>
                            <ul role="list" className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.LiCompletionRate")}
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.LiIntake")}

                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <MinusIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    />
                                    <span>
                                     {t("medicalBot.LiCallCenter")}
                                    </span>
                                </li>
                            </ul>
                            <div className="lg:max-w-lg">
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {t("medicalBot.platformEvolutionTitle")}
                                </h2>

                                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                    <Trans
                                        i18nKey="medicalBot.platformEvolutionDescription"
                                        components={[emphasis, emphasis, emphasis]}
                                    />
                                </p>

                                <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">
                                    {t("medicalBot.platformImprovementsHeading")}
                                </h3>

                                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformImprovementUi")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformImprovementCalendar")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformImprovementCrm")}
                                    </IconListItem>
                                </ul>

                                <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">
                                    {t("medicalBot.platformResultsHeading")}
                                </h3>

                                <ul role="list" className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformResultPatientLookup")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformResultAvailability")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformResultSelfService")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.platformResultTracking")}
                                    </IconListItem>
                                </ul>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {t("medicalBot.workflowTitle")}
                                </h2>

                                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                    {t("medicalBot.workflowDescription")}
                                </p>

                                <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.workflowRouting")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.workflowStatuses")}
                                    </IconListItem>
                                    <IconListItem icon={ListIcon}>
                                        {t("medicalBot.workflowVisibility")}
                                    </IconListItem>
                                </ul>

                                <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                                    <Trans i18nKey="medicalBot.workflowOutcome" components={[emphasis]} />
                                </p>
                            </div>
                        </div>
                        {/*Roadmap & Future Development*/}
                        <div className="lg:max-w-lg">
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.roadmapTitle")}
                            </h2>

                            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                {t("medicalBot.telegramLimitsIntro")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitComponents")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitForms")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.telegramLimitLatency")}</IconListItem>
                            </ul>

                            <h3 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white">
                                {t("medicalBot.nextStepsHeading")}
                            </h3>

                            {/* 1) Embedded Web App */}
                            <h4 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.webAppHeading")}
                            </h4>

                            <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                                {t("medicalBot.webAppDescription")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.webAppTelegramAuth")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.webAppRichUi")}</IconListItem>
                            </ul>

                            {/* 2) AI-assisted interaction */}
                            <h4 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.aiHeading")}
                            </h4>

                            <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                                {t("medicalBot.aiDescription")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.aiGuidance")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.aiConversational")}</IconListItem>
                            </ul>

                            {/* 3) Operator workspace */}
                            <h4 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.operatorHeading")}
                            </h4>

                            <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
                                {t("medicalBot.operatorDescription")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.operatorDrafting")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.operatorSeparation")}</IconListItem>
                            </ul>

                            <p className="mt-10 text-base/7 text-gray-600 dark:text-gray-400">
                                <Trans
                                    i18nKey="medicalBot.roadmapClosing"
                                    components={[emphasis, emphasis]}
                                />
                            </p>
                        </div>

                        {/*Value for Businesses*/}

                        <div className="lg:max-w-lg">
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("medicalBot.valueTitle")}
                            </h2>

                            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                {t("medicalBot.valueIntro")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.valuePointEntry")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.valuePointAutomation")}</IconListItem>

                                {/* Вариант A: обычный t() */}
                                <IconListItem icon={ListIcon}>{t("medicalBot.valuePointAi")}</IconListItem>

                                {/* Вариант B (если включишь опциональный Trans для valuePointAi):
          <IconListItem icon={ListIcon}>
            <Trans
              i18nKey="medicalBot.valuePointAi"
              components={[emphasis, emphasis]}
            />
          </IconListItem>
          */}
                            </ul>

                            <p className="mt-10 text-xl/8 text-gray-700 dark:text-gray-300">
                                {t("medicalBot.valueAdaptIntro")}
                            </p>

                            <ul role="list" className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                                <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptMedical")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptServices")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptAppointments")}</IconListItem>
                                <IconListItem icon={ListIcon}>{t("medicalBot.valueAdaptSupport")}</IconListItem>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
