/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#FFF0D1"
        },
        dark: {
          400: "#141414"
        }
      }
    },
  },
  plugins: [],
}

