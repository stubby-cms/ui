import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
};
