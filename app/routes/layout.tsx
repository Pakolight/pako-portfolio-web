import { Outlet, useParams, useNavigate, Link, redirect} from "react-router";
import type {LoaderFunctionArgs } from 'react-router'
import { useEffect } from "react";
import i18n from "../../i18n"; // i18next configuration
import {defaultLanguage} from "../../i18n";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return null;
}


export default function LanguageLayout() {
    const { lang } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!lang) return;

        if (!["en", "pl", "ru", "ua"].includes(lang)) {
            // If language is unknown, redirect to default
            navigate("/en", { replace: true });
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
