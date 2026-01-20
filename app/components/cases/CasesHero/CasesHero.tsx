
export default function CasesHero({title, description}: {title: string, description: string | false}) {
    const classVsDescription = ' sm:py-32 py-24'
    const classNoDescription = ' sm:pt-8 sm:pb-4 pt-8 pb-2'
    return (
        // <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
        <div className={`bg-white px-6 lg:px-8 dark:bg-gray-900 ${description? classVsDescription: classNoDescription}`}>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
                    {title}
                </h2>
                {description && <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                    {description}
                </p>}
            </div>
        </div>
    )
}
