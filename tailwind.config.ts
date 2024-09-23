import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Font Family
    fontFamily: {
      Josefin: ['Josefin Sans', 'sans-serif'],
      julyIt: ['July it'],
    },

    extend: {
      // Color
      colors: {
        'primary': '#BB976D',
        'primary-midum': '#DBCBBD',
        'primary-light': '#FFF7F0',
        'secondary': '#E13939',
        'secondary-midum': '#EAD4D4',
        'secondary-light': '#FAF2F2',
        'tertiary': '#85A3B4',
        'tertiary-midum': '#C8DAE4',
        'tertiary-light': '#ECF2F5',
        'title': '#172430',
        'paragraph': '#3C474E',
        'snow': '#F6F6F6',
        'dark-card-bg': '#1E2A35',
        'white-light': '#DBDBDB',
        'bdr-clr': '#E8E9EA;',
        'bdr-clr-drk': '#3C474E',
        'dark-secondary': '#1E2A35',
      },
      // Shadow 
      dropShadow: {
        'primary-shadow': '0px 30px 50px -10px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        '1366': '1366px',
      }
    },
  },
  plugins: [
    typography
  ],
};
export default config;
