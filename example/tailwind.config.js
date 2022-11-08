/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = {
  headings: ['DM Sans', ...defaultTheme.fontFamily.sans],
  content: ['Montserrat', ...defaultTheme.fontFamily.sans]
}

const fontSize = {
  64: 'var(--font-size-64)',
  48: 'var(--font-size-48)',
  36: 'var(--font-size-36)',
  24: 'var(--font-size-24)',
  18: 'var(--font-size-18)',
  16: 'var(--font-size-16)',
  14: 'var(--font-size-14)',
  12: 'var(--font-size-12)',
  10: 'var(--font-size-10)'
}

const spacing = {
  '2xs': 'var(--spacing-2xs)',
  xs: 'var(--spacing-xs)',
  sm: 'var(--spacing-sm)',
  md: 'var(--spacing-md)',
  lg: 'var(--spacing-lg)',
  xl: 'var(--spacing-xl)',
  '2xl': 'var(--spacing-2xl)',
  '3xl': 'var(--spacing-3xl)',
  '4xl': 'var(--spacing-4xl)',
  '5xl': 'var(--spacing-5xl)',
  '6xl': 'var(--spacing-6xl)',
  '7xl': 'var(--spacing-7xl)'
}

const transitionProperty = {
  width: 'width'
}

const variants = {
  extend: {
    opacity: ['disabled']
  }
}

const screens = {
  m: { max: '639px' }, // Mobile
  t: { min: '640px', max: '959px' }, // Tablet
  d: '960px', // Desktop
  mt: '959px', // Mobile and Tablet
  td: '640px' // Tablet and Desktop
}

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily,
      fontSize,
      spacing,
      borderRadius: spacing,
      transitionProperty,
      screens
    }
  },
  variants,
  plugins: []
}
