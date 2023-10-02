/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greeny: "#06D6A0",
        bgblue: "#15141b",
        graywhite: "#8A8A8D",
        gold: "#FFD166",
      },
    },
  },
  plugins: [],
};
