/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "Arial", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "500px": "500px",
      },
    },
  },
  plugins: [],
};
