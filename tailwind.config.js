/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // muito importante no React
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
}
