/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.{html,js}',
    './src/**/*.{js,ts,jsx,tsx,css}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
