/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index'],
  media: true,
  content: ['./**/*.html'], // Add the path to your HTML files
  theme: {
    extend: {},
  },
  plugins: [],
};
