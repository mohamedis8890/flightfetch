/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: {
          1: "#207abb",
          2: "#49a0e0",
        },
      },
    },
  },
  plugins: [],
};
