/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'opensans': ["OpenSans", 'sans-serif'],
      'nunito': ["Nunito Sans", 'sans-serif']
    }
  },
  plugins: [],
}

