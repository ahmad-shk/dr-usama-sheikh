import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ur from './locales/ur.json';


const resources = {
  en: { translation: en },
  ur: { translation: ur },
};

// Get initial language from localStorage if present, else default to 'en'
const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
const initialLang = storedLang || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
