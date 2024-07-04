/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 20px 0 rgba(0, 0, 0, 0.1)'
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
    },
  },
  plugins: [],
}

