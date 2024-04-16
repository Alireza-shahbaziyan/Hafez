/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    colors:{
      "bgColor":"#D2CAC5",
      "buttonColor":"#CC3D00",
      "darkText":"#523B24",
      "white":"#fff",

    },
    extend: {
      backgroundImage: {
        'backgroundWelcomePage': "url('./src/assets/images/backgroundWelcomePage.png')",
      }
    },
  },
  plugins: [],
}