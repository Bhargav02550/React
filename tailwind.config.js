/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
   "./public/index.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sqr:["Bebas Neue","sans-serif"],
      pop:['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}