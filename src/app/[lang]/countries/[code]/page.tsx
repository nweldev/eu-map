import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionnary';
import { getBaseUrl } from '@/app/shared/utils/getBaseUrl';

  const fetchCountry = async (code: string) => {
    const res = await fetch(`${getBaseUrl()}/api/countries/${code}?synthetic}`, { cache: 'force-cache' });
    const { data } = await res.json();
    
    return data;
  };

export default async function Countries({ params: { lang, code: countryCode } }: { params: { lang: Locale, code: string } }) {
  const dictionary = await getDictionary(lang);
  const country  = await fetchCountry(countryCode);

  return (
    <>
    <h1>{country.name[lang] || country.name.vo}</h1>
    </>
  );
}
