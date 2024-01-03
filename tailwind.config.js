module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 100: "#b4bcec", 400: "#407ccd", 900: "#091582" },
        blue: { 900: "#1727b3" },
        blue_gray: { 100: "#d5dcdc" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        teal: { 200: "#94bac9" },
      },
      fontFamily: {
        lexenddeca: "Lexend Deca",
        inder: "Inder",
        jomolhari: "Jomolhari",
        justanotherhand: "Just Another Hand",
        inriaserif: "Inria Serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
