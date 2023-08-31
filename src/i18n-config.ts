export const i18n = {
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
} as const;

export const codes = {
  fr: 'français',
  en: 'english',
};

export type Locale = (typeof i18n)['locales'][number];
