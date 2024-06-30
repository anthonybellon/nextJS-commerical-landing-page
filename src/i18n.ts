import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

type Locale = 'en' | 'fr';

const locales: Locale[] = ['en', 'fr'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
