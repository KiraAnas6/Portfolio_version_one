/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2a9d90",
        gray: "#fff6",
        gold: "#6f5b3e",
        black: {
          DEFAULT: "#000",
          100: "#060606",
          200: "#121212",
          300: "#000000bf",
        },
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
