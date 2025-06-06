/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg": "#192328",
        "text": "#B78848",
        "darkbg":"#141D20",
        "bgred":"#371A1C",
        "blec":"#100E11",
        "xchat": "#2A2E2B",
        "white":"#EBE4D4",
        "green":"#454d39",
        "blue" : "#3A4A3F",
        "button": "#92A673",
        "next":"#c0863a",

      }
    },
  },
  plugins: [],
}
