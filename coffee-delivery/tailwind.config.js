import { colors } from './src/theme/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        body: 'Roboto',
        title: 'Baloo 2',
      },
    },
  },
  plugins: [],
}
