/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /** ==== overrides === */
    colors: {
      dark: "hsl(255, 25%, 11%)",
      light: "hsl(255, 25%, 85%)",
      hint: "hsl(255, 25%, 55%)",
      yellow: "#E5B73E",
      pink: "#EB5673",
      purple: "#A280E8",
      black: "#000000",
      teal: "#8be9fd",
      green: "#50fa7b",
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
      boxShadow: {
        light: "0 1px 6px rgb(0 0 0 / 4%)",
      },
      gridTemplateColumns: {
        "fill-3": "repeat(auto-fill, minmax(396px, 3fr))",
      },
      typography: ({ theme }) => ({
        dracula: {
          css: {
            "--tw-prose-body": theme("colors.light/50"),
            "--tw-prose-headings": theme("colors.light"),
            "--tw-prose-lead": theme("colors.light"),
            "--tw-prose-bold": theme("colors.light"),
            "--tw-prose-links": theme("colors.purple"),
            "--tw-prose-counters": theme("colors.hint"),
            "--tw-prose-pre-bg": theme("colors.dark"),
            "--tw-prose-bullets": theme("colors.pink[400]"),
            "--tw-prose-hr": theme("colors.pink[300]"),
            "--tw-prose-quotes": theme("colors.pink[900]"),
            "--tw-prose-quote-borders": theme("colors.pink[300]"),
            "--tw-prose-captions": theme("colors.pink[700]"),
            "--tw-prose-code": theme("colors.pink[900]"),
            "--tw-prose-pre-code": theme("colors.pink[100]"),
            "--tw-prose-th-borders": theme("colors.pink[300]"),
            "--tw-prose-td-borders": theme("colors.pink[200]"),

            pre: {
              padding: "12px",
              display: "block",
              overflowX: "auto",
              background: "var(--tw-prose-pre-bg)",
              borderRadius: "4px",
            },

            a: {
              textDecoration: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
