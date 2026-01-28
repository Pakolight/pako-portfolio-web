import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "~/i18n/locales/pl.json";
import en from "~/i18n/locales/en.json";
import ru from "~/i18n/locales/ru.json";
import ua from "~/i18n/locales/ua.json";
import nl from "~/i18n/locales/nl.json";

export const languages = ["pl", "en", "ru", "ua", "nl"];
export const defaultLanguage = "en";
i18n
    .use(initReactI18next)
    .init({
        resources: {
            pl: { translation: pl },
            en: { translation: en },
            ru: { translation: ru },
            nl: { translation: nl },
            ua: { translation: ua }
        },
        lng: defaultLanguage,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
