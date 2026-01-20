import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./locales/pl.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ua from "./locales/ua.json";

export const languages = ["pl", "en", "ru", "ua"];
export const defaultLanguage = "pl";
i18n
    .use(initReactI18next)
    .init({
        resources: {
            pl: { translation: pl },
            en: { translation: en },
            ru: { translation: ru },
            ua: { translation: ua }
        },
        lng: defaultLanguage,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
