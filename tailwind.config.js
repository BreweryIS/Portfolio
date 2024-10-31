/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F5F5F5' ,
        secondary: '#0099E5',
        bg:'#222222',
        bglight:'#333333'
      }
    },
  },
  plugins: [],
}

