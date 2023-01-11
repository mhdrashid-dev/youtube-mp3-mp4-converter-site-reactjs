/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:'Montserrat',
      },
      colors:{
        primary:'rgb(21, 220, 148)',
        secondary:'rgb(27,26,31)',
      }
    },
  },
  plugins: [],
}
