/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gopayra: "#1F8578",
        gopayraLight: "#31B78A",
        goDesc: "#C9C9CA",
        liteBlack: "rgba(255, 255, 255, 0.16)",
      },
      fontSize: {
         heading: ['42px', '58.8px']
      },
    },
  },
  plugins: [],
}
