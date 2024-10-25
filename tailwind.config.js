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
      },
      textColor: {
        bright: "#FFF0D1",
        dim: "#262626", 
      },
      cursor: {
        'custom-cursor': 'url("/images/cursor.png"), auto',
      },
      animation: {
        fadeInSlide: 'fadeInSlide 0.5s ease-out forwards',
        bounceMore: 'bounceMore 1.5s infinite'
      },
      keyframes: {
        fadeInSlide: {  // Keyframes for fading in and sliding up
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',  // Start below
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',  // End in place
          }
        },
        bounceMore:  {
          '0%, 100%':{
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(100%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
}
