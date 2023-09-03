'use client';

import { ToggleSwitch } from 'flowbite-react';
import { PropsWithChildren, useContext } from 'react';
import { CountriesGroup, CountriesParamsContext, CountriesParamsState } from '../CountriesView';

export default function MapMenuGroup({ children, title, group, toggle = false }: PropsWithChildren<{ title: string; group?: CountriesGroup; toggle?: boolean }>) {
  const {
    countriesParams,
    setCountriesParams
  } = useContext(CountriesParamsContext) as CountriesParamsState;

  const handleChange = () => {
    if (countriesParams.group !== group) {
      setCountriesParams({ ...countriesParams, group});
    } else {
      setCountriesParams({ ...countriesParams, group: undefined });
    }
  }
  
  return (
    <div className="mb-8">
      <h2 className="flex flex-row gap-2 my-4">
        <span className="font-bold grow">{title}</span>
        {toggle && <ToggleSwitch label="" checked={countriesParams.group === group} onChange={handleChange} />}
      </h2>
      {children}
    </div>
  );
}
