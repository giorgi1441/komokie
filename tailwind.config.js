/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'alpha': {
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.08)',
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.3)',
        400: 'rgba(0, 0, 0, 0.4)',
        500: 'rgba(0, 0, 0, 0.5)',
        600: 'rgba(0, 0, 0, 0.6)',
        700: 'rgba(0, 0, 0, 0.7)',
        800: 'rgba(0, 0, 0, 0.8)',
        900: 'rgba(0, 0, 0, 0.9)',
      },
      'primary': {
        50: '#FFF7F6',
        100: '#FFEFED',
        200: '#FEE0DC',
        300: '#FED0CA',
        400: '#FDB0A7',
        500: '#FC6250',
        600: '#E35848',
        700: '#CA4E40',
        800: '#973B30',
        900: '#652720'

      },
    },
  },
  plugins: [],
}
