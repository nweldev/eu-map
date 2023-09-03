'use client';

import { useContext, useEffect, useState } from 'react';
import { svgCountries } from './svgCountires';
import classNames from 'classnames';
import { IdeologicFamily } from '@prisma/client';
import { CountriesParamsContext, CountriesParamsState } from '../CountriesView';

export default function EuropeMap() {
  const { countriesParams, setCountriesParams } = useContext(CountriesParamsContext) as CountriesParamsState;
  const [countries, setCountries] = useState(svgCountries as any[]);

  useEffect(() => {
    const countriesFetch = async () => {
      setCountriesParams({ ...countriesParams, loading: true});
      const res = await fetch('/api/countries?synthetic=true');
      const { data } = await res.json();

      const mergedData = svgCountries.map((svgCountrie: any) => ({
        ...svgCountrie,
        ...data[svgCountrie.code],
      }));

      // set state when the data received
      setCountries(mergedData);
      setCountriesParams({ ...countriesParams, loading: false});
    };

    countriesFetch();
  }, []);

  const countriesPaths = countries.map((countrie) => (
    <path
      d={countrie.path}
      name={countrie.code}
      key={countrie.code}
      className={classNames({
        'fill-slate-900': countriesParams.group === 'gov' && countrie.gov && countrie.gov.leaderFamily === IdeologicFamily.FAR_RIGHT,
        'fill-none': countrie.code === 'ue',
        'stroke-4 stroke-red-800': countrie.code === 'ue' && countriesParams.ueBorder,
        'stroke-none': countrie.code === 'ue' && !countriesParams.ueBorder,
        'hidden': countrie.code === 'flawed-democracies'
      })}
    />
  ));

  return (
    <svg
      stroke="#fff"
      fill="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 702 540"
      xmlns="http://www.w3.org/2000/svg"
      className="md:h-screen m-auto min-w-[600px] min-h-[450px] snap-center"
    >
      {countriesPaths}
    </svg>
  );
}
