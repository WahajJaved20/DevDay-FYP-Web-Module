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
        'headerButton': "#003149",
        'dashColor': "#C8C8C8"
      },
      textColor: {
        'primaryColor': '#000000',
        'secondaryColor': '#088097',
        'innovationColor':"#9B9ADC",
        'subInnovation': '#003149',
        "dateColor": "#7A7A7A"
      },
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
        circularStd: ['CircularStd', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}