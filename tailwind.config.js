const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px',
      },
      padding: '2.5rem',
    },
    extend: {
      colors: {
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
        light: {
          default: '#FFFFFF',
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        gray: {
          400: '#EBEBEB',
        },
      },
      dropShadow: {
        neon: '0px 0px 6px #FC7400',
      },
      fontSize: {
        base: '0.938rem',
        '1.5xl': '1.375rem',
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      'jp-sans': ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
