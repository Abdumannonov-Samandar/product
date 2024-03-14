/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./images/logo.svg')",
        "hero-mobile": "url('./images/logo.svg')",
      },
    },
    colors: {
      blue: "#4D8DFF",
      green: "#02897A",
      purple: "#740A76",
      dark: "#22343D",
      white: "#FFFFFF",
      orange: "#F03E3D",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};