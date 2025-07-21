import { getRequestConfig } from 'next-intl/server';
import { Locale, locales } from './config';

export default getRequestConfig(async ({requestLocale}) => {
  // Este pode vir de cookies, headers, ou ser detectado automaticamente
  let locale = await requestLocale;

  // Validar que o locale está dentro dos supported locales
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'pt-BR';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});