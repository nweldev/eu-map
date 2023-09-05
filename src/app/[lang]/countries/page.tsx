import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionnary';
import CountriesView from './_CountriesView/CountriesView';
import { Header } from '../_header/Header';

export default async function Countries({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary.header} />
      <CountriesView dictionary={dictionary.countries} className="min-h-[--h-full-content] md:h-[--h-full-content]"/>
    </>
  );
}
