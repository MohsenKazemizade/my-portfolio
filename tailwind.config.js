/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      notSm: { min: '760px' },
      sm: { min: '300px', max: '760px' },
      // => @media (min-width: 640px and max-width: 767px)

      md: { min: '760px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px)

      lg: { min: '1023px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px)

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px)

      '2xl': { min: '1536px', max: '1905px' },
      // => @media (min-width: 1536px and max-width: 1905px)

      '3xl': { min: '1906px' },
      // => @media (min-width: 1905px)
    },
    extend: {
      // animate typing text start
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
      },
      //animate typing text end
    },
  },
  plugins: [],
};
