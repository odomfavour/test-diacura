/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color-light-blue-300": "#107BC0",
        "light-blue": "rgba(207, 229, 242, 0.30)",
        "dark-gray": "rgba(239, 239, 239, 0.70)",
        "transparent-blue": "rgba(16, 123, 192, 0.10)",
      },
      textColor: {
        "primary-color-light-blue-300": "#107BC0",
      },
      borderColor: {
        "primary-color-light-blue-300": "#107BC0",
      },
      boxShadow: {
        xxl: "0px 4px 4px 0px rgba(9, 64, 99, 0.32)",
        bigBox:
          "0px 2px 10px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.20)",
      },
    },
    fontFamily: {
      "Open-sans": ['"Open sans"', "sans-serif"],
    },
  },
  plugins: [],
};
