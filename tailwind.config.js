const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#0f161d',
        'dark-100': '#15202b',
        'dark-200': '#1d2d3c',
        'dark-300': '#263a4d',
        'dark-400': '#2e465e',
        'dark-500': '#42586e',
        accent: '#1d9bf0',
      },
    },
    maxWidth: {
      1000: '1000px',
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}
