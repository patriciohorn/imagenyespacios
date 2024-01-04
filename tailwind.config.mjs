/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecf8ff',
          100: '#d5edff',
          200: '#b5e1ff',
          300: '#6D89BC',
          400: '#3D62A5',
          500: '#0C3B8F',
          600: '#0A2F72',
          700: '#072356',
          800: '#051839',
          900: '#011334'
        },
        secondary: {
          100: '#F3E6E9',
          200: '#E7CCD3',
          300: '#CF99A8',
          400: '#B6677C',
          500: '#DA2C2B',
          600: '#6B011E',
          700: '#500116',
          800: '#36000F',
          900: '#1B0007'
        },
        gray: {
          25: '#FCFCFD',
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA4B2',
          500: '#697586',
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
          950: '#0D121C'
        },
        accent: {
          500: '#D9A21B'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
