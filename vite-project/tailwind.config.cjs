/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#F9F9F9",
        blue: "#1d4ed8",
        white: "white",
        skyBlue: "#33B199",
        darkBlue: "#142580",
        btnColor : "#BDEA09",
        signInBG : "#F6F6F6"
      },
      backgroundImage: {
        'contact': "url('./contact.jpg')",
      },
    },
  },
  plugins: [],
};
