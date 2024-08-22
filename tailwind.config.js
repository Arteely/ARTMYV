/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#1A1A1A',
      'white': '#EAEAEA',
      'orange': '#FA2805',
      'text': '#BBBBBB'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      header: ['Space\\ Grotesk', 'sans-serif'],
      logo: ['Syncopate', 'sans-serif']
    },
    extend: {
    }
  },
  plugins: [],
}

