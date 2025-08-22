/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#0e0f13", card: "#151824", accent: "#7c4dff" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,.25)" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
