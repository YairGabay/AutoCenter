import { Resource } from 'i18next';
import { EnglishTranslations } from './EnglishTranslations';
import { HebrewTranslations } from './HebrewTranslations';

export const TranslationResources: Resource = {
  en: {
    translation: EnglishTranslations,
  },
  he: {
    translation: HebrewTranslations,
  },
};
