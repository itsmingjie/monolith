/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /** ==== overrides === */
    colors: {
      dark: "hsl(255, 25%, 11%)",
      light: "hsl(255, 25%, 90%)",
      hint: "hsl(255, 25%, 55%)",
      yellow: "#E5B73E",
      pink: "#EB5673",
      purple: "#A280E8",
      black: "#000000",
      transparent: "transparent",
    },
    letterSpacing: {
      tightest: "-.06em",
      tighter: "-.04em",
      tight: "-.02em",
      "semi-tight": "-.01em",
      normal: "0",
      "semi-wide": ".01em",
      wide: ".02em",
      wider: ".04em",
      widest: ".06em",
    },
    /** ==== end of override === */
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        light: "0 1px 6px rgb(0 0 0 / 4%)",
      },
      gridTemplateColumns: {
        "fill-3": "repeat(auto-fill, minmax(396px, 3fr))",
      },
    },
  },
};
