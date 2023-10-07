import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslation from './locales/de/de.json';
import enTranslation from './locales/en/en.json';


i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
    },
  });

export default i18n;
