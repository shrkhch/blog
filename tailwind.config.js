/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'mplus': ["M PLUS Rounded 1c"],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
