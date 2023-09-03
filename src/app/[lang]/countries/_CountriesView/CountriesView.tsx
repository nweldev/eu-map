'use client';

import { createContext, useState } from 'react';
import EuropeMap from './map/EuropeMap';
import MapMenu from './menu/MapMenu';
import { PropsWithDictionary } from '@/types';

export type CountriesGroup = 'gov';

export interface CountriesParams {
  ueBorder?: boolean;
  group?: CountriesGroup;
}

export type CountriesParamsState = {
  countriesParams: CountriesParams;
  setCountriesParams: (params: CountriesParams) => void;
};

const InitialCountriesParams: CountriesParams = {
  ueBorder: false,
  group: 'gov',
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
      <div className="grow shrink min-w-[350px] bg-zinc-900 mr-4 p-4">
        <MapMenu dictionary={dictionary.menu} />
      </div>
      <div className="flex item-center relative basis-full">
        <EuropeMap />
      </div>
    </CountriesParamsContext.Provider>
  );
}
