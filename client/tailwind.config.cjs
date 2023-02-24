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
      keyframes : {
        arrowMove: {
          '0%': { top: '155%'},
          '50%': { top: '200%' },
          '100%': { top: '155%' },
        }
      },
      animation: {
        'promote-searching': 'arrowMove 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
