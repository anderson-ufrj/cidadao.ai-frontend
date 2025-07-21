// import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'pt-BR' as const;
export const locales = ['pt-BR', 'en-US'] as const;

export type Locales = typeof locales;
export type Locale = Locales[number];

export const localePrefix = 'never' as const; // Não mostra locale na URL

// export const pathnames: Pathnames<Locales> = {
//   '/': '/',
//   '/docs': '/docs',
// };