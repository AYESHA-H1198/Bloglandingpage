/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish:'#1E1E28',
        bluish:'#6268F5',
        babyblue:'#daf0ff',
      },
    },
  },
  plugins: [],
}