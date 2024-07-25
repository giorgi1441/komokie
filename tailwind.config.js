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
            'secondary': {
                50: '#F4F8F9',
                100: '#E8F0F4',
                200: '#D2E2E9',
                300: '#BBD3DE',
                400: '#8EB6C8',
                500: '#1E6E91',
                600: '#1B6382',
                700: '#185874',
                800: '#124257',
                900: '#0C2C3A',
            },
            backgroundColor: {
                transparent: 'transparent',
                'main': 'rgba(246, 249, 251, 1)',
                'additional': 'rgba(255, 255, 255, 1)',
                'primary': 'rgba(252, 98, 80, 0.1)',
                'secondary': 'rgba(30, 110, 145, 0.1)',
                'positive': 'rgba(128, 203, 123, 0.1)',
                'informative': 'rgba(50, 173, 230, 0.1)',
                'notice': 'rgba(255, 185, 0, 0.1)',
                'negative': 'rgba(229, 62, 51, 0.1)',
            },
        },
    },
    plugins: [],
}
