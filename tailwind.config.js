/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { dark: "#0C0A0E", gold: "#C9A253" } }
    }
  },
  plugins: []
};
