'use client';

import { createContext, useState } from 'react';
import EuropeMap from './map/EuropeMap';
import MapMenu from './menu/MapMenu';
import { PropsWithDictionary } from '@/types';

export type CountriesGroup = 'gov';

export interface CountriesParams {
  ueBorder: boolean;
  group?: CountriesGroup;
  loading: boolean
}

export type CountriesParamsState = {
  countriesParams: CountriesParams;
  setCountriesParams: (params: CountriesParams) => void;
};

const InitialCountriesParams: CountriesParams = {
  ueBorder: false,
  group: 'gov',
  loading: true,
};

export const CountriesParamsContext = createContext<CountriesParamsState | {}>({});

export default function CountriesView({ dictionary }: PropsWithDictionary<{}, any>) {
  const [countriesParams, setCountriesParams] = useState(InitialCountriesParams);

  return (
    <CountriesParamsContext.Provider
      value={{
        countriesParams,
        setCountriesParams,
      }}
    >
      <div className="flex flex-row max-md:flex-col-reverse h-screen md:h-screen w-full">
        <div className="grow min-w-[300px] md:max-w-[500px] bg-zinc-900 md:mr-4 p-4 overflow-y-scroll">
          <MapMenu dictionary={dictionary.menu} />
        </div>
        <div className="flex item-center relative md:grow max-md:max-w-screen overflow-scroll snap-x">
          <EuropeMap />
        </div>
      </div>
    </CountriesParamsContext.Provider>
  );
}
