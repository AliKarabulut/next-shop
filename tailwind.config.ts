import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
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
        lightDark: "#333e48",
        dark: "#231f20",

        "admin-primary-light": "#E3F2FD",
        "admin-primary-200": "#90CAF9",
        "admin-primary-main": "#2196F3",
        "admin-primary-dark": "#1E88E5",
        "admin-primary-800": "#1565C0",
        "admin-secondary-light": "#EDE7F6",
        "admin-secondary-200": "#B39DDB",
        "admin-secondary-main": "#673AB7",
        "admin-secondary-dark": "#5E35B1",
        "admin-secondary-800": "#4527A0",
        "admin-success-light": "#B9F6CA",
        "admin-success-200": "#69F0AE",
        "admin-success-main": "#00E676",
        "admin-success-dark": "#00C853",
        "admin-orange-light": "#FBE9E7",
        "admin-orange-main": "#FFAB91",
        "admin-orange-dark": "#D84315",
        "admin-error-light": "#EF9A9A",
        "admin-error-main": "#F44336",
        "admin-error-dark": "#C62828",
        "admin-warning-light": "#FFF8E1",
        "admin-warning-main": "#FFE57F",
        "admin-warning-dark": "#FFC107",
        "admin-grey-50": "#F8FAFC",
        "admin-grey-100": "#EEF2F6",
        "admin-grey-200": "#EEEEEE",
        "admin-grey-300": "#E0E0E0",
        "admin-grey-500": "#697586",
        "admin-grey-600": "#4B5565",
        "admin-grey-700": "#364152",
        "admin-grey-900": "#121926",
        "admin-pure-white": "#FFFFFF",
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
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
export default config;
