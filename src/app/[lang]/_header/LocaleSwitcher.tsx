'use client';

import { Locale, intlCookieKey } from '@/i18n-config';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();

  const dictionnary = {
    fr: 'Passer en français',
    en: 'Switch to english',
  };

  const pathName = usePathname();
  if (!pathName) return '/';
  const pathSegments = pathName.split('/');
  const currentLanguage = pathSegments[1];

  const redirectedPathName = (locale: string) => {
    pathSegments[1] = locale;
    return pathSegments.join('/');
  };

  const setPreferredLanguage = (locale: Locale) => {
    Cookies.set(intlCookieKey, locale);
    router.push(redirectedPathName(locale));
  };

  const target = currentLanguage === 'fr' ? 'en' : 'fr';

  return <button onClick={() => setPreferredLanguage(target)}>{dictionnary[target]}</button>;
}
