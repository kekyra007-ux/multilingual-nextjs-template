// lib/languageDetector.js
import languageDetector from "next-language-detector";
import i18nextConfig from "../next-i18next.config";

export default languageDetector({
  supportedLngs: i18nextConfig.i18n.locales, // ["en", "fil"]
  fallbackLng: i18nextConfig.i18n.defaultLocale, // "fil" ← Вот здесь!
});
