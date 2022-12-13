/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          colors: {
              text: "#6f6f6f",
              semi: "#aa958a",
              card: "#e9bfad",
              light: "#ffffff"
          },
          boxShadow: {
              sm: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
          },
      },
  },
  plugins: [],
};