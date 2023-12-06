/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      primary: {
        50: '#FFFBFF',
        100: '#DEE0FF',
        200: '#BBC3FF',
        300: '#98A5FD',
        400: '#4A58A9',
        500: '#3E4B9C',
        600: '#323F90',
        700: '#253384',
        800: '#182778',
        900: '#000E5E'
      },
      secondary: {
        100: '#FBEAEA',
        500: '#DA2C2B',
        600: '#C62827'
      }
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
