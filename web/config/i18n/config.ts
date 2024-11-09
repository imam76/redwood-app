// src/i18n/config.ts

// Core i18next library.
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesLang from "./resourcesLang";

i18n
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: resourcesLang
  });

export default i18n;
