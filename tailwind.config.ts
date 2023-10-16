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
      // colors: {
      //   white: "#ffffff",
      //   "white-33": "#ffffff33",
      //   "white-f2": "#fffffff2",

      //   gray: {
      //     50: '#fafafa',
      //     100: "#f9f9f9",
      //     200: "#f8f8f8",
      //     300: "#eeeeee",
      //     400: "#eaeaea",
      //     500: "#e6e6e6",
      //     600: "#dddddd",
      //     700: "#888585",
      //     800: "#333e48",
      //     900: "#142688",
      //     950: "#231f20",
      //   },
        
      //   black: {
      //     30: "#0000004d",
      //     40: "#00000066",
      //     70: "#1010104d",
      //   },

      //   yellow: {
      //     500: "#fed700",
      //     600: "#fdd700",
      //     700: "#fbbc04",
      //     800: "#f79e1b",
      //     900: "#f48120",
      //   },

      //   red: {
      //     500: "#dc3545",
      //     700: "#eb001b",
      //   },

      //   blue: {
      //     500: '#34bcec',
      //     600: "#0062bd",
      //     650: '#4285f4',
      //     700: "#006fcf",
      //     750: '#0081fb',
      //     800: '#3086c8',
      //     900: "#333e481a",
      //   },

      //   orange: {
      //     500: "#ff5f00",
      //   },

      //   purple: {
      //     600: "#5a31f4",
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
