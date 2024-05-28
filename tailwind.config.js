/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2
      lg: '1.125rem', // body1
      xl: '1.25rem', // h6
      '2xl': '1.5rem', // h5
      '3xl': '2rem', //h4
      '4xl': '3rem', // h3
      '5xl': '3.25rem', // h2
      '6xl': '4rem', // h1
      '7xl': '5rem', // h1
    },
    extend: {
      colors: {
        dark: '#010101',
        blue: '#29335C',
        dark: '#232324',
        gray: '#A9A9A9',
        lightGray: '#f2f2f3',
        red: '#ce4f51',
        purple: '#8c54fb',
      },
      borderWidth: {
        1: '1px',
      },
      gridColumn: {},
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      boxShadow: {
        card: 'rgba(247, 151, 79, 0.4) 0px 10px 50px', // remnove in production
      },
    },
  },
  plugins: [],
}
