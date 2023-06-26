/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['26px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '48px'],
      '6xl': ['60px', '70px'],
      '7xl': ['72px', '1'],
      '8xl': ['96px', '1'],
      '9xl': ['128px', '1'],
    },
    extend: {
      colors: {
        'very-light-blue': '#E5F0FB',
        'light-blue': '#C4DDF7',
        'light-blue-gradient1': '#9EC3EB',
        'light-blue-gradient2': '#D0E7FF',
        'light-blue2': '#A1C9F2',
        'light-medium-blue': '#5B92D4',
        'medium-blue-gradient1': '#5B92D4',
        'medium-blue-gradient2': '#A1C9F2',
        'medium-blue': '#33529B',
        'dark-blue-gradient1': '#102361',
        'dark-blue-gradient2': '#244186',
        'dark-blue': '#102361',
        'dark-gray': '#353535',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        custom: ['Epilogue'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
