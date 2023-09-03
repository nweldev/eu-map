import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['border-red-800', 'border-2', 'bg-blue-800', 'bg-blue-950'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      strokeWidth: {
        '4': '4px',
      },
    },
  },
};
export default config;
