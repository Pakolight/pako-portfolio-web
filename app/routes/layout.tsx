import type { Route } from "./+types/home";
import { Outlet, useParams, useNavigate, Link, redirect} from "react-router";
import type {LoaderFunctionArgs } from 'react-router'
import { useEffect } from "react";
import i18n from "../i18n/i18n"; // i18next configuration
import {defaultLanguage, languages} from "../i18n/i18n";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "PAKO — Full-Stack Developer" },
        {
            name: "description",
            content:
                "Full-stack developer building fast, reliable web applications for automation, bookings, internal tools, and integrations.",
        },
    ];
}


export default function LanguageLayout() {
    const { lang } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!lang) return;

        if (!languages.includes(lang)) {
            // If language is unknown, redirect to default
            navigate(`/${defaultLanguage}`, { replace: true });
        } else {
            i18n.changeLanguage(lang);
        }
    }, [lang, navigate]);

    return (
        <div>
            <Outlet/>
        </div>
    );
}
