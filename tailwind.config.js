/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'cursive'],
        Permanent_Marker: ['Permanent Marker', 'cursive']
      }
    },
  },
  plugins: [],
}