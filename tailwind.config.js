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
      fontSize: {
        "8px": "8px",
        "10px": "10px",
      },
      borderRadius: {
        "40px": "40px",
      },
      maxWidth: {
        "300px": "300px",
        "500px": "500px",
      },
      colors: {
        primary: "#0693A6",
        secondary: "#D0EAEE",
        blue1: "#092C4C",
        gray1: "#666666",
        gray2: "#F5F5F5",
        gray3: "#F8F8F8",
        gray4: "rgba(0, 0, 0, 0.24)",
        gray5: "#D2D2D2",
        label: "#393F45",
      },
      spacing: {
        "60px": "60px",
        "200px": "200px",
      },
    },
  },
  plugins: [],
};
