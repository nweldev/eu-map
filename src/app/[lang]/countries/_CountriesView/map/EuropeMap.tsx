'use client';

import { useContext, useEffect, useState } from 'react';
import { svgCountries } from './svgCountires';
import classNames from 'classnames';
import { IdeologicFamily } from '@prisma/client';
import { CountriesParamsContext, CountriesParamsState } from '../CountriesView';

export default function EuropeMap() {
  const { countriesParams } = useContext(CountriesParamsContext) as CountriesParamsState;
  const [countries, setCountries] = useState(svgCountries as any[]);

  useEffect(() => {
    const countriesFetch = async () => {
      const res = await fetch('/api/countries?synthetic=true');
      const { data } = await res.json();

      const mergedData = svgCountries.map((svgCountrie: any) => ({
        ...svgCountrie,
        ...data[svgCountrie.code],
      }));

      // set state when the data received
      setCountries(mergedData);
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
        'stroke-4 stroke-red-800': countrie.code === 'ue' && countriesParams.ueBorder,
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
      className="lg:max-h-screen mx-auto"
      width="100%"
    >
      {countriesPaths}
    </svg>
  );
}
