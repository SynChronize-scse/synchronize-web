/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#FFF0D1",
          900: "#262626"
        },
        dark: {
          400: "#141414"
        },
        input: "#635D37",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

