/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      mdViolet: 'hsl(263, 55%, 52%)',
      dkGrayBlue: 'hsl(217, 19%, 35%)',
      dkBlackBlue: 'hsl(219, 29%, 14%)',
      ltGray: 'hsl(0, 0%, 81%)',
      ltGrayBlue: 'hsl(210, 46%, 95%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
