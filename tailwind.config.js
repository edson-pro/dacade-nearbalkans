/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "arial"],
      },
      colors: {
        "title-color": "#3f4246",
        "text-color": "#676767",
        "text-light-color": "#8F96A7",
      },
    },
  },
  plugins: [],
};
