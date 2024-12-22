import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
};
