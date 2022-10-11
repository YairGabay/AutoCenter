import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationResources } from './TranslationResources';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: TranslationResources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
