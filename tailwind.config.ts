import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.danube,
      default: colors.athensGray,
      // black: colors.codGray,
      // white: colors.athensGray,

      codGray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#070707",
      },
      athensGray: {
        50: "#f6f8f9",
        100: "#f0f2f4",
        200: "#b0bbc4",
        300: "#8e9ea9",
        400: "#667b8a",
        500: "#4e5c65",
        600: "#38434c",
        700: "#293238",
        800: "#1f2429",
        900: "#191c1f",
        950: "#070808",
      },
      danube: {
        50: "#f3f8fb",
        100: "#e4eef5",
        200: "#cfe2ee",
        300: "#aed0e2",
        400: "#88b6d2",
        500: "#6c9ec6",
        600: "#5887b8",
        700: "#4d75a8",
        800: "#43608a",
        900: "#3a506e",
        950: "#273344",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            foreground: "#f6f8f9",
            background: "#0C0C0C",
            default: {
              950: "#f6f8f9",
              900: "#e0d2d4", // "#f0f2f4"
              800: "#adb9c2",
              700: "#8b9ba7",
              600: "#647987",
              500: "#4b5962",
              400: "#364149",
              300: "#272f35",
              200: "#1d2226",
              100: "#171a1c",
              50: "#0C0C0C", //dark
            },
            primary: {
              DEFAULT: "#6c9ec6",
              50: "#f3f8fb",
              100: "#e4eef5",
              200: "#cfe2ee",
              300: "#aed0e2",
              400: "#88b6d2",
              500: "#6c9ec6",
              600: "#5887b8",
              700: "#4d75a8",
              800: "#43608a",
              900: "#3a506e",
              950: "#273344",
            },
          },
        },
        light: {
          colors: {
            foreground: "#0C0C0C",
            background: "#f6f8f9",
            default: {
              50: "#f6f8f9",
              100: "#f0f2f4",
              200: "#adb9c2",
              300: "#8b9ba7",
              400: "#647987",
              500: "#4b5962",
              600: "#364149",
              700: "#272f35",
              800: "#1d2226",
              900: "#171a1c",
              950: "#0C0C0C",
            },
            primary: {
              DEFAULT: "#6c9ec6",
              50: "#f3f8fb",
              100: "#e4eef5",
              200: "#cfe2ee",
              300: "#aed0e2",
              400: "#88b6d2",
              500: "#6c9ec6",
              600: "#5887b8",
              700: "#4d75a8",
              800: "#43608a",
              900: "#3a506e",
              950: "#273344",
            },
          },
        },
      },
    }),
  ],
};
export default config;
