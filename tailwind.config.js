/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
      },
      fontFamily: {
        barlowCondensed: ['"Barlow Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
