import { svgCountries } from './svgCountires';


export default function EuropeMap() {
  return (
        <svg
          stroke="#fff"
          fill="#111"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".5"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 702 540"
          xmlns="http://www.w3.org/2000/svg"
          className='lg:max-h-screen mx-auto'
          width="100%"
        >
          {svgCountries.map((countrie) => (
            <path d={countrie.path} name={countrie.code} key={countrie.code} />
          ))}
        </svg>
  )
}