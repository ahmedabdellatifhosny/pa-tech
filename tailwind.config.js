/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary-text': '#000',
        'primary-bg': 'black',
        'primary-border': '#ffc400',
        'secondary': 'white',
        // Dark mode colors
        'dark-primary-text': '#f0f0f0',
        'dark-primary-bg': '#181818',
        'dark-primary-border': '#333333',
      },
      // Adding custom utilities
      flex: {
        'centered': 'flex justify-center items-center',
      },
      spacing: {
        'flex-centered': 'flex justify-center items-center',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flex-centered': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.my-title-one': {
          fontSize: '1.125rem', // text-lg
          '@screen md': {
            fontSize: '1.25rem', // md:text-xl
          },
          '@screen lg': {
            fontSize: '1.875rem', // lg:text-3xl
          },
          '@screen xl': {
            fontSize: '2.25rem', // xl:text-4xl
          },
          '@screen 2xl': {
            fontSize: '3rem', // 2xl:text-5xl
          },
        },
        'translate-center':{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          top: '50%',
          left: '50%',
        }
      });
    },
  ],
}
