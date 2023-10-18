/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Banner": "linear-gradient(to right, rgb(4, 15, 26, .7), rgb(4, 15, 26, .4)), url('https://i.ibb.co/55kB8yS/samsung-vr-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
// #000000b3