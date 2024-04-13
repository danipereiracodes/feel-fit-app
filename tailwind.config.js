/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        feelFitLayout: '75px 1fr 75px',
      },
      colors: {
        'primary-dark': '#0B0C10',
        'secondary-dark': '#1f2833',
        'primary-gray': '#c5c6c7',
        'bright-primary': '#66fcf1',
        'bright-secondary': '#45a29e',
        'banner-overlay': 'rgba(0,0,0,0.41)',
      },
    },
  },
  plugins: [],
};
