import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    extend: {
      colors: {
        // White
        white: "#ffffff",
        whiteTransparent: "#ffffff33",
        whiteLight: "#fffffff2",

        // Gray
        grayLighter: "#f8f8f8",
        grayLight: "#e6e6e6",
        gray: "#dddddd",
        grayDark: "#878787",
        grayDarker: "#848484",

        // Yellow
        yellow: "#fed700",
        gold: "#fed700",

        // Green
        green: "#4cd964",

        // Red
        red: "#ff3b30",
        redDark: "#dc3545",

        // Blue
        blue: "#007aff",
        blueTransparent: "#333e481a",
        blueDark: "#333e48",
        blueLight: "#34bcec",
        blueGoogle: "#4285f4",
        blueFacebook: "#3b5998",
        blueTwitter: "#1da1f2",
        blueLinkedIn: "#0077b5",
        blueInstagram: "#c13584",

        // Purple
        purple: "#5a31f4",

        // Black
        blackTransparent: "#0000004d",
        blackSemiTransparent: "#00000066",
        black: "#000000",

        // Dark
        dark: "#231f20",
      },
      animation: {
        open: "open .5s ease forwards",
        opacityFast: "opacity .3s ease forwards ",
        opacitySlow: "opacity .5s ease forwards ",
      },
      keyframes: {
        open: {
          "0%,": { top: "-150px" },
          "100%": { top: "0px" },
        },
        opacity: {
          "0%,": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
