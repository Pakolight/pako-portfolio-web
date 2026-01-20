import {Link} from "react-router";

const actions = [
    {
        title: 'Medical Services Platform',
        to: 'medical-bot/problem-solution',
        icon: "/public/img/medical-bot/medikalCaseIcon.svg",
        iconForeground: 'text-teal-700 dark:text-teal-400',
        iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
        description: 'A healthcare service platform that streamlines emergency requests, doctor appointments, surgical consultations, patient dashboards, payments, and operator communication through a single, guided interface.',
    },
    {
        title: 'Massage Therapist Portfolio & Booking Website',
        to: 'massage-studio/problem-solution',
        icon: "/public/img/massage-studio/handSolid.svg",
        iconForeground: 'text-teal-700 dark:text-teal-400',
        iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
        description: 'A portfolio and booking website for a solo massage therapist, combining service selection, flexible booking requests, messenger-based communication, and Google Calendar synchronization.',
    },
    {
        title: 'Passenger Transportation Management System',
        to: 'passenger-transportation-management-system/problem-solution',
        icon: "/public/img/snow-bus/bus.svg",
        iconForeground: 'text-teal-700 dark:text-teal-400',
        iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
        description: 'A request-driven management system for international passenger transportation companies operating without their own fleet. Designed to aggregate demand, support routing decisions, and integrate partner-based operations without relying on fixed schedules.',
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CasesGreed() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-sm sm:grid sm:grid-cols-2 sm:divide-y-0 dark:divide-white/10 dark:bg-gray-900 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/20">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-br-lg rounded-bl-lg sm:rounded-bl-none' : '',
                        'group relative border-gray-200 bg-white p-6 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:odd:not-nth-last-2:border-b sm:even:border-l sm:even:not-last:border-b dark:border-white/10 dark:bg-gray-800/50 dark:focus-within:outline-indigo-500',
                    )}
                >
                    <div>
            <span className={classNames(action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3')}>
              {/*<action.icon aria-hidden="true" className="size-6" />*/}
              <img src={action.icon} alt="" className={"h-10 w-10"}/>
            </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                            <Link to={action.to} className="focus:outline-hidden">
                                {/* Extend touch target to entire panel */}
                                <span aria-hidden="true" className="absolute inset-0" />
                                {action.title}
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            {action.description}
                        </p>
                    </div>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-200"
                    >
            <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
                </div>
            ))}
        </div>
    )
}
