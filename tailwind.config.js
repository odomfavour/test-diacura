/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color-light-blue-300': '#107BC0',
        'light-blue': 'rgba(207, 229, 242, 0.30)',
      },
      textColor: {
        'primary-color-light-blue-300': '#107BC0',
      }, 
      borderColor: {
        'primary-color-light-blue-300': '#107BC0',
      },
      boxShadow: {
        'xxl': '0px 4px 4px 0px rgba(9, 64, 99, 0.32)',
      }
    },
  },
  plugins: [],
}