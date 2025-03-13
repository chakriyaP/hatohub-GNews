import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations for all languages
import enTranslation from "../src/locales/en/translations.json";
import zhTranslation from "../src/locales/zh/translations.json";
import arTranslation from "../src/locales/ar/translations.json";
import nlTranslation from "../src/locales/nl/translations.json";
import frTranslation from "../src/locales/fr/translations.json";
import deTranslation from "../src/locales/de/translations.json";
import elTranslation from "../src/locales/el/translations.json";
import heTranslation from "../src/locales/he/translations.json";
import hiTranslation from "../src/locales/hi/translations.json";
import itTranslation from "../src/locales/it/translations.json";
import jaTranslation from "../src/locales/ja/translations.json";
import mlTranslation from "../src/locales/ml/translations.json";
import mrTranslation from "../src/locales/mr/translations.json";
import noTranslation from "../src/locales/no/translations.json";
import ptTranslation from "../src/locales/pt/translations.json";
import roTranslation from "../src/locales/ro/translations.json";
import ruTranslation from "../src/locales/ru/translations.json";
import esTranslation from "../src/locales/es/translations.json";
import svTranslation from "../src/locales/sv/translations.json";
import taTranslation from "../src/locales/ta/translations.json";
import teTranslation from "../src/locales/te/translations.json";
import ukTranslation from "../src/locales/uk/translations.json";

// Add all languages to the resources object
const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  ar: {
    translation: arTranslation,
  },
  nl: {
    translation: nlTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  de: {
    translation: deTranslation,
  },
  el: {
    translation: elTranslation,
  },
  he: {
    translation: heTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
  it: {
    translation: itTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
  ml: {
    translation: mlTranslation,
  },
  mr: {
    translation: mrTranslation,
  },
  no: {
    translation: noTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
  ro: {
    translation: roTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  es: {
    translation: esTranslation,
  },
  sv: {
    translation: svTranslation,
  },
  ta: {
    translation: taTranslation,
  },
  te: {
    translation: teTranslation,
  },
  uk: {
    translation: ukTranslation,
  },
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })
  .then(() => {
    console.log("i18next initialized successfully");
  })
  .catch((error) => {
    console.error("i18next initialization failed:", error);
  });

export default i18n;
