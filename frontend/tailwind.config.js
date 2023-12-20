/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fancy-extra-dark-blue': '#080b0e',
        'fancy-dark-blue': '#101418',
        'grey': '#919394',
        'gold': '#8d721e',
        'turquoise': '#15616D'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    },
  },
  plugins: [],
}

