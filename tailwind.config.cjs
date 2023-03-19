/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1000px', // Set maximum width breakpoint to 1000px
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}