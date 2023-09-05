import { getDictionary } from '@/get-dictionnary';
import { Header } from '../_header/Header';
import { Locale } from '@/i18n-config';

export default async function Docs({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  
  return (
    <main className="min-h-screen">
      <Header dictionary={dictionary.header} />
      <article className='max-w-[960px] md:w-[960px] mx-auto mt-16'>
        <h1 className='text-4xl mb-8'>{dictionary.docs.title}</h1>
        <p className="italic">
          {dictionary.global.wip}
        </p>
      </article>
    </main>
  );
}
