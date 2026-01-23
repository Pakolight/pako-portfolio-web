import {CheckCircleIcon, XCircleIcon, XMarkIcon,} from '@heroicons/react/20/solid'
import {useEffect, useState} from "react";

export default function Alert({status, alertMessage, open} : {status: boolean, alertMessage: string, open: boolean}) {
    const [openAlert, setOpenAlert] = useState(false)
    useEffect(() => {
        if (open) {
            setOpenAlert(true)
        }
        setTimeout(() => {
            setOpenAlert(false)
        }, 5000)
    }, [open]);

    if (!openAlert) return null;

    return (
        status  ? <div className="rounded-md bg-green-50 p-4 dark:bg-green-500/10 dark:outline dark:outline-green-500/20">
            <div className="flex">
                <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">{alertMessage}</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            onClick={() => setOpenAlert(false)}
                            type="button"
                            className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50 focus-visible:outline-hidden dark:bg-transparent dark:text-green-400 dark:hover:bg-green-500/10 dark:focus-visible:ring-green-500 dark:focus-visible:ring-offset-1 dark:focus-visible:ring-offset-green-900"
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
            :
            <div className="rounded-md bg-red-50 p-4 dark:bg-red-500/15 dark:outline dark:outline-red-500/25">
                <div className="flex">
                    <div className="shrink-0">
                        <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                            {alertMessage}
                        </h3>
                        <div className="mt-2 text-sm text-red-700 dark:text-red-200/80">
                            {/*<ul role="list" className="list-disc space-y-1 pl-5">*/}
                            {/*    <li>Your password must be at least 8 characters</li>*/}
                            {/*    <li>Your password must include at least one pro wrestling finishing move</li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                onClick={() => setOpenAlert(false)}
                                type="button"
                                className="inline-flex rounded-md bg-green-50 p-1.5 text-red-500 hover:bg-green-100 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50 focus-visible:outline-hidden dark:bg-transparent dark:text-red-400 dark:hover:bg-green-500/10 dark:focus-visible:ring-red-500 dark:focus-visible:ring-offset-1 dark:focus-visible:ring-offset-red-900"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon aria-hidden="true" className="size-5 " />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

    )
}
