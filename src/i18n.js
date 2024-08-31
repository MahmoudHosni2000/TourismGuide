import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Download trans. Files
  .use(LanguageDetector) // Detect browser's language
  .use(initReactI18next) // integrate with React
  .init({
    fallbackLng: "en", // Default lang.
    lng: 'ar',
    debug: true, // Correct mode
    interpolation: {
      escapeValue: false, // Protect against Xss Attacks
    },
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "FormRegisterRestaurantEgypt",
      "FormRegisterMa3lemEgypt",
      "FormRegisterHotelEgypt",
      "ProgramEgypt",
      "MapPage",
      "Cards",
      "HD2",
      "RD",
      "LM"
    ],
    defaultNS: "translation",
  });

export default i18n;
