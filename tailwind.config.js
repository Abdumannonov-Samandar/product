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
    boxShadow: {
      'box' : '0px 2px 15px 0px rgba(23, 58, 86, 0.1)',
      'sss' : '0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      'drop' : '0px 1px 2px 0px [#00000040]',
    },
  },
  plugins: [],
};