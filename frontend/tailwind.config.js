/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   josefinSans: ['Josefin Sans', 'sans-serif']
      // },
      colors: {
        'fancy-extra-dark-blue': '#080b0e',
        'fancy-dark-blue': '#101418',
        'grey': '#919394',
        'gold': '#8d721e'
      }
    },
  },
  plugins: [],
}

