/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%": { letterSpacing: "-17px", opacity: "0" },
          "100%": { letterSpacing: "0px", opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-out forwards ",
      },
    },
  },
  plugins: [],
};
