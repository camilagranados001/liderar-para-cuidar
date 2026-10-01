/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        vatcoBlue: '#0b2545',
        vatcoGold: '#e0a96d',
        vatcoYellow: '#f4c430',
        vatcoRed: '#a61c1c',
        vatcoDark: '#071628',
        vatcoLight: '#f4f7fb'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}