/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        0.47: "0.47px",
      },
      colors: {
        "primary-color": "#153C3B",
      },
      height: {
        "without-header": "calc(100vh - 126px)",
      },
    },
  },
  plugins: [],
};
