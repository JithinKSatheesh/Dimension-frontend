module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding : {
        DEFAULT: '1rem',
        lg: '20px',
        xl: '130px',
        '2xl' : '200px'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {},
  },
  plugins: [],
}