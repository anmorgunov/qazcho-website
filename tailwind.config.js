const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'system-ui']
    },
    listStyleType: {
      square: 'square',
      decimal: 'decimal',
      disc: 'disc',
      lowerAlpha: 'lower-alpha',
      lowerRoman: 'lower-roman',
      dash: "'–⁠ '",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      accent: colors.teal
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last', 'dark'],
      textColor: ['active'],
      boxShadow: ['dark'],
      borderWidth: ['dark'],
      borderRadius: ['dark'],
    },
  },
  plugins: [
  ],
}
