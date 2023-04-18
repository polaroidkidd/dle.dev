const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"merriweather"', ...defaultTheme.fontFamily.serif],
        sans: ['"lato"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
