/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        "grey": "#F9FAFC",
        "btn-primary": "#0E78F7",
        "btn-secondary": "#F9FAFC",
        "btn-txt-primary": "#C5F3FF",
        "btn-txt-secondary": "#030303",
        "btn-border-secondary": "#D1D5DB",
      },
    },
  },
  plugins: [],
};
