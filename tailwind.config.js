/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      alpha: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4.5xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "6.5xl": "4rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        alpha: {
          light: {
            100: "#E6F0FB",
            200: "#CCE2F7",
            300: "#B3D3F4",
            400: "#9AC5F0",
            500: "#81B6EC",
            600: "#67A7E8",
            700: "#4E99E4",
            800: "#358AE1",
            900: "#1B7CDD",
          },
          DEFAULT: "#026DD9",
          dark: {
            100: "#0262C3",
            200: "#0257AE",
            300: "#014C98",
            400: "#014182",
            500: "#01376D",
            600: "#012C57",
            700: "#012141",
            800: "#00162B",
            900: "#000B16",
          },
        },

        // Still need to add full colour list
        bravo: {
          light: "#FFF8E1",
          DEFAULT: "#D8A401",
          mid: "#AA802D",
          dark: "#7F6001",
          darkest: "#513E00",
        },
        error: {
          DEFAULT: "#EA4335",
          light: "#ECADA7",
          lightest: "#FDF7F7",
          dark: "#773B35",
          darkest: "#231F1F",
        },
        success: {
          DEFAULT: "#34A853",
          light: "#C2ECA7",
          lightest: "#e7f7dc",
          dark: "#417735",
          darkest: "#231F20",
        },
        warning: {
          DEFAULT: "#B37730",
          light: "#ECCDA7",
          lightest: "#F7EBDC",
          dark: "#775935",
          darkest: "#23211F",
        },
        gray: colors.neutral,
      },

      lineHeight: {
        heading: "1.2",
      },

      maxWidth: {
        "8xl": "1440px",
        "9xl": "1680px",
        "10xl": "1920px",
      },
      screens: {
        xs: "390px",
      },
      spacing: {
        4.5: "1.125rem",
        screen: "100dvh",
      },
      minHeight: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
