/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#004D40',
        'secondary-bg': '#00695C',
        'accent': '#FF8F00',
        'text-light': '#E0F2F1',
      }
    },
  },
  plugins: [],
}
