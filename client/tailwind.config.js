/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      "bottom-2": "center bottom -6rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-10": "center top 5rem",
    },
    extend: {
      colors: {
        text: "#9a9a9c",
        darktext: "#333333",
        card: "#ff3b00",
        semi: "#aa958a",
        light: "#ffffff",
        soft: "#f5f5f5",
        semisoft:"#dddddd",
        blue: "#0030d0",
        lightblue: "#1140de",
        dark: "#151515",
        main: "#ff3b00",
        trans: "rgba(255, 255, 255, .4)",
        lighttrans: "rgba(255, 255, 255, .2)",
        bluetrans: "rgb(0, 48, 208, .5)",
        maintrans: "rgb(255, 59, 0, .5)",
        cardyellow: "#f6b756",
        cardtransblue: "rgba(0, 48, 208, .85)",
        cardtransyellow: "rgba(246, 183, 86, .8)",
      },
      boxShadow: {
        sm: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
