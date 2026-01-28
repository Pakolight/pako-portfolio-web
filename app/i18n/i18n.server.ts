import i18next from "i18next";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import ru from "./locales/ru.json";
import ua from "./locales/ua.json";
import nl from "./locales/nl.json";

export async function getI18n(lang?: string) {
    const i18n = i18next.createInstance();

    await i18n.init({
        lng: lang,
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            nl: { translation: nl },
            pl: { translation: pl },
            ru: { translation: ru },
            ua: { translation: ua },
        },
        interpolation: { escapeValue: false },
    });

    return i18n;
}
