import { Languages } from '@apex-rn/library/helpers';

export const LANGUAGES: Languages = {
  en: {
    tag: 'en',
    label: 'English',
    isRTL: false,
    getter: () => require('./en.json'),
  },
  es: {
    tag: 'es',
    label: 'Español',
    isRTL: false,
    getter: () => require('./es.json'),
  },
};
