// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ], 
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF', // #3AB0FF #254879
          DEFAULT: '#007BFF',
          dark: '#0056b3',
        },
      },
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities);
    }
  ], 
};


