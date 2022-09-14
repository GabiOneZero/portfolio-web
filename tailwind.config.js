/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'secondaryColor': '#85A3B4',
        'backgroundPrimary': '#01131D',
        'backgroundSecondary': '#013747',
        'textPrimary': '#E6EBEF'
      },
      fontFamily: {
        'titleFont': 'SF Mono',
        'primaryFont': 'Calibre'
      },
    },
  },
  plugins: [],
}
