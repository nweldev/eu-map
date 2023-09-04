import LocaleSwitcher from './LocaleSwitcher';
import dynamic from 'next/dynamic';

const DarkModeToggle = dynamic(() => import('./DarkModeToggle'), {
  ssr: false,
});

export function Header({ author }: { author: string }) {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm md:flex">
      <div className="flex h-12 w-full item-start justify-center md:h-auto md:w-auto">
        <LocaleSwitcher />
      </div>
      <div className="">
        <DarkModeToggle />
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black md:static md:h-auto md:w-auto md:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 md:pointer-events-auto md:p-0"
          href="https://nwel.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </div>
    </div>
  );
}
