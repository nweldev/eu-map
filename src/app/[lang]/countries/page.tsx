import { Locale } from '@/i18n-config';
import EuropeMap from './_CountriesView/map/EuropeMap';
import MapMenu from './_CountriesView/menu/MapMenu';
import { getDictionary } from '@/get-dictionnary';
import { useState, createContext, Context } from 'react';
import CountriesView from './_CountriesView/CountriesView';
import { Header } from '../_header/Header';

export default async function Countries({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header author={dictionary.home.author} />
      <CountriesView dictionary={dictionary.countries} />;
    </>
  );
}
