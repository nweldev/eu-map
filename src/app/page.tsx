import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-end font-mono text-sm md:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black md:static md:h-auto md:w-auto md:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 md:pointer-events-auto md:p-0"
            href="https://nwel.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Nwel.dev
          </a>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-5xl">Eurocraties</h1>
        <p className="italic">Comprendre et explorer la politique des États européens.</p>
      </div>

      <div className="mb-32 w-full grid md:max-w-5xl md:w-full md:mb-0 md:grid-cols-2 md:text-left">
        <Link
          href="/countries"
          className="md:text-right md:justify-self-end group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="hidden md:inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>{' '}
            Pays{' '}
            <span className="inline-block md:hidden transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Explorer la politique pays par pays, via la carte ou une liste.</p>
        </Link>

        <Link
          href="/docs"
          className="md:justify-self-start group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Documentations thématiques additionnelles.</p>
        </Link>
      </div>
    </main>
  );
}
