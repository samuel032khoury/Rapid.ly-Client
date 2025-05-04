/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};
