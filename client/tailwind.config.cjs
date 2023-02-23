/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: "Shippori Mincho",
      },
      colors: {
        "black-main": "#222222",
        "red-accent": "#8E1828",
      },
    },
  },
  plugins: [],
};
