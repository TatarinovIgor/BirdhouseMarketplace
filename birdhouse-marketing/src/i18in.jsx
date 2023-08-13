import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import translationEn from './content/locales/en/translation.json';

i18next
    .use(initReactI18next)
    .use(HttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .init({
            fallbackLng: 'en',
            debug: true,
            resources: {
                en: {translation: translationEn},
            },
            interpolation: {
                escapeValue: false,
            },
        }
    );
export default i18next;
