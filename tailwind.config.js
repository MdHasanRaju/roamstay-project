/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      btnPrimary: "#7A4253",
      btnSecondary: "rgba(174, 174, 174, 0.3);",
      transparent: "transparent",
      white: "#ffffff",
      dark: "#000000",
      textColor: "#CDCDCD",
      textPrimary: "rgba(0, 0, 0, 0.87)",
      base: "#F9EFE1",
      buttonText: "#807A72",
    },
    fontFamily: {
      gurmukhi: ["Tiro Gurmukhi", "serif"],
      poppins: ["Poppins", "sans-serif"],
      playfairDisplay: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
