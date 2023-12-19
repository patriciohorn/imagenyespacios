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
        accent: {
          100: '#faf6e8',
          200: '#f1e5b9',
          300: '#e7d38b',
          400: '#ddc15c',
          500: '#CFA716',
          600: '#a68612',
          700: '#7c640d',
          800: '#534309',
          900: '#292104'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
