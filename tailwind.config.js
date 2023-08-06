/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary-bg": {
          DEFAULT: "#011627",
          variant: "#011221"
        },
        "secondary": "#607B96",
        "accent": {
          10: "#1E2D3D",
          50: "#E5E9F0",
          30: "#1C2B3A",
          80: "#A0BDE1"
        },
        "typo": {
          blue: "#4D5BCE",
          green: "#43D9AD",
          orange: "#E99287",
          pink:"#C98BDF"
        }
      },
      fontFamily: {
        "BlackOps-Regular": "BlackOps-Regular",
        "FiraCode": "FiraCode",
      }
    },
  },
  plugins: [],
}

