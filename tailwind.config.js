/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#242427' ,
        secondary: '#463112',
        // dark: '#111113',
        light: '#e5e0dc',
        btn: '#d1942a',
        bg:'#2f2215'
      }
    },
  },
  plugins: [],
}

