import type { Config } from 'tailwindcss';
import flowbite from 'flowbite';

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['border-red-800', 'border-2', 'bg-slate-900'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      strokeWidth: {
        '4': '4px',
      },
    },
  },
};
export default config;
