import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
    },
    extend: {
      colors: {
        'lighter-gray': '#f8f8f8',
        'light-gray': '#e6e6e6',
        'dark-gray': '#878787',
        'darker-gray': '#848484',
        'site-yellow': '#fed700',
        'site-red': '#dc3545',
        'light-dark': '#333e48',
        dark: '#231f20',
      },
      animation: {
        open: 'open .5s ease forwards',
        opacityFast: 'opacity .3s ease forwards ',
        opacitySlow: 'opacity .5s ease forwards ',
      },
      keyframes: {
        open: {
          '0%,': { top: '-150px' },
          '100%': { top: '0px' },
        },
        opacity: {
          '0%,': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
}
export default config
