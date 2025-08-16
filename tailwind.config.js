/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { purple: "#7E2AE0", gold: "#C9A253", dark: "#0C0A0E" }
      }
    },
  },
  plugins: [],
}
