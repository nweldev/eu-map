import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionnary';
import { getBaseUrl } from '@/app/shared/utils/getBaseUrl';

import styles from '../../document.module.scss';
import classNames from 'classnames';

const fetchCountry = async (code: string) => {
  const res = await fetch(`${getBaseUrl()}/api/countries/${code}?synthetic=true}`, { cache: 'force-cache' });
  const { data } = await res.json();

  return data;
};

export default async function Countries({ params: { lang, code: countryCode } }: { params: { lang: Locale; code: string } }) {
  const dictionary = (await getDictionary(lang)).countries.details;
  const country = await fetchCountry(countryCode);

  return (
    <div className={classNames('min-h-[--h-full-content]', styles.document)}>
      <h1>{country.name[lang] || country.name.vo}</h1>
    </div>
  );
}
