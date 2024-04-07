/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './public/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'opensans': ["OpenSans", 'sans-serif'],
      'nunito': ["Nunito Sans", 'sans-serif']
    },
    colors: {
      'primary': '#F9F9F9',
      'second': '#AAAAAA',
      'third': '#75ccff',
      'fourth': '#d5efff',
    }
  },
  plugins: [],
}

