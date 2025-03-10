/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      colors: {
        juristo: "#F1F5F9",
        chatButton: "#0F172A",
        chatButtonBorder: "#0F172A",
        gridcolor: "#0A0118",
      },
    },
  },
  plugins: [],
};
