'use client';

import { ToggleSwitch } from 'flowbite-react';
import { useContext } from 'react';
import { CountriesParamsContext, CountriesParamsState } from '../CountriesView';

export default function MapMenuEntry({
  text,
  color,
  stroke,
  borderColor = 'white',
  toggle = false,
}: {
  text: string;
  color?: string;
  stroke?: string;
  borderColor?: string;
  toggle?: boolean
}) {
  const legendStyle = `w-6 h-6 border${stroke ? `-${stroke}` : ''} border-${borderColor} mr-2 bg-${color}`;
  const {
    countriesParams,
    setCountriesParams
  } = useContext(CountriesParamsContext) as CountriesParamsState;

  const handleChange = () => {
    setCountriesParams({ ...countriesParams, ueBorder: !countriesParams.ueBorder });
  };

  return (
    <div className="flex flex-row gap-2">
      <span className={legendStyle}></span>
      <span className="grow">{text}</span>
      { toggle && <ToggleSwitch label="" checked={!!countriesParams.ueBorder} onChange={handleChange} /> }
    </div>
  );
}
