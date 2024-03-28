/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primaryColor': '#9BD7E6',
      },
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}