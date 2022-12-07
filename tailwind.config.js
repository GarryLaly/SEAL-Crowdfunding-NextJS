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
        "300px": "300px",
        "500px": "500px",
      },
      colors: {
        primary: "#0693A6",
        gray1: "#666666",
      },
      spacing: {
      },
    },
  },
  plugins: [],
};
