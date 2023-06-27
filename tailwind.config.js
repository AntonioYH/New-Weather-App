/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'custom-drop-shadow': '3px 3px 5px black',
      },
    },
  },
  plugins: [],
};
