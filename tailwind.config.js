/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gopayra: "#208578",
        gopayraLight: "#31B78A",
        goDesc: "#EDEADE"
      },
    },
  },
  plugins: [],
}
