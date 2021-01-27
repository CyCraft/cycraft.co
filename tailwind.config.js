const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'btn-light-green': '#E4FFE7',
        'btn-bright-green': '#22FF06',
        'toggle-gray': '#7c7c7c',
      },
      visibility: ['hover', 'focus'],
    },
  },
  variants: {},
  plugins: [],
}
