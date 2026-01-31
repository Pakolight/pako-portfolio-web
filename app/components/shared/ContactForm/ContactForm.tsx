import {useTranslation} from "react-i18next";
import {useFetcher, useParams} from "react-router";
import {useForm} from "react-hook-form"
import type {SubmitHandler} from "react-hook-form"
import {languages} from  "~/i18n/i18n"
import {useEffect} from "react";

type Inputs = {
    lang: "en" | "ru" | "pl" | "nl" | "ua" | null
    email: string
    fullName: string
    message: string
}

// validation schemas
 const FULL_NAME_REGEX =
    /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žА-Яа-яІіЇїЄєҐґŁłŃńÓóŚśŹźŻż'’\- ]+$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NO_HTML_TAGS = /<[^>]*>/g

type ContactFormProps = {
    onValidSubmit?: () => void
    onValidityChange?: (isValid: boolean) => void
}

export default function ContactForm({onValidSubmit, onValidityChange}: ContactFormProps) {
    const {t} = useTranslation();
    const fetcher = useFetcher()
    const {lang} = useParams()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        fetcher.submit({ ...data }, { method: 'POST', action: `/${lang}/home` });
        onValidSubmit?.()
    };
    const{register,handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            lang: lang as any,
            email: '',
            fullName: '',
            message: ''
        }, mode: 'onBlur'})

    useEffect(() => {
        onValidityChange?.(isValid)
    }, [isValid, onValidityChange])

    return (
        <form id={"contactMeForm"} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <input  type="hidden"
                       {...register("lang",
                           {
                               validate: (value) =>
                                   value === null ||
                                   languages.includes(value as any) ||
                                   t("validation.lang")
                           }
                       )}
                       value={lang}/>
                <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
                    <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">{t("contactForm.title")}</h2>
                    <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                        {t("contactForm.description")}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                {t("contactForm.fullName")}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full-name"
                                    {...register("fullName", {
                                        required: "Full name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Full name is too short",
                                        },
                                        maxLength: {
                                            value: 80,
                                            message: "Full name is too long",
                                        },
                                        pattern: {
                                            value: FULL_NAME_REGEX,
                                            message: "Only letters, spaces and hyphens are allowed",
                                        },
                                        validate: {
                                            noExtraSpaces: (value) =>
                                                value.trim() === value || "Remove leading or trailing spaces",
                                            noDoubleSpaces: (value) =>
                                                !/\s{2,}/.test(value) || "Too many spaces",
                                        },
                                    })}
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                                {/*<p className={"text-red-500"}>{errors.email?.message || actionData?.errors?.email}</p>*/}
                                <p className={"text-red-500"}>{errors.fullName?.message}</p>
                            </div>
                        </div>

                        <div className="sm:col-span-3 ">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                {t("contactForm.email")}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        maxLength: {
                                            value: 100,
                                            message: "Email is too long",
                                        },
                                        pattern: {
                                            value: EMAIL_REGEX,
                                            message: "Invalid email address",
                                        },
                                        validate: {
                                            noSpaces: (value) =>
                                                value.trim() === value || "Email must not contain spaces",
                                        },
                                    })}
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                                <p className={"text-red-500"}>{errors.email?.message}</p>

                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                {t("contactForm.message")}
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="message"

                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: {
                                            value: 10,
                                            message: "Message is too short",
                                        },
                                        maxLength: {
                                            value: 1000,
                                            message: "Message is too long",
                                        },
                                    })}
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                    defaultValue={''}
                                />
                                <p className={"text-red-500"}>{errors.message?.message}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
