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
        goDesc: "#68686B",
        liteBlack: "rgba(255, 255, 255, 0.16)",
        liteBorder: '#CDE2DF',
        liteGray: '#F6F9FC;',
      },
      fontSize: {
         heading: ['42px', '58.8px']
      },
    },
  },
  plugins: [],
}
