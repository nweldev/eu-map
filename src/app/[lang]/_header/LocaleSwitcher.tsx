'use client';

import { Locale, intlCookieKey } from '@/i18n-config';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const router = useRouter();

  const dictionnary = {
    fr: 'Passer en français',
    en: 'Switch to english',
  };

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const setPreferredLanguage = (locale: Locale) => {
    Cookies.set(intlCookieKey, locale);
    router.push(redirectedPathName(locale));
  };

  const target = lang === 'fr' ? 'en' : 'fr';

  return <button onClick={() => setPreferredLanguage(target)}>{dictionnary[target]}</button>;
}
