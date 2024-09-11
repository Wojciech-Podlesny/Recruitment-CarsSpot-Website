/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    margin: {
      "5px": "5px",
      "6px": "6px",
    },
    fontSize: {
      xs: "14px",
      sm: "15px",
      base: "16px",
      lg: "21.5px",
      xl: "22.5",
      "2xl": "24px",
      "3xl": "25px",
      "4xl": "40px",
      "5xl": "76.29px",
    },

    fontFamily: {
      roboto: ["Roboto Flex", "sans-serif"],
      condensed: ["Roboto Condensed", "sans-serif"],
      bebas: ["Bebas Neue", "cursive"],
    },

    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/img/images/Hero.png')",
        heroMobile: "url('/src/img/images/Hero_Mobile.png')",
      },

      colors: {
        primary: "var(--primary-color)",
        textLogo: "var(--text-logo-color)",
        greyLight: "var(--grey-light-color)",
        grey: "var(--grey-color)",
        dark: "var(--dark-color)",
        white: "var(--white-color)",
      },
      lineHeight: {
        21: "21px",
        22.5: "22.5px",
        83.92: "83.92px",
        32.5: "32.25px",
        37: "37px",
        48: "48px",
      },

      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
