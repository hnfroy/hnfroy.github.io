/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Press Start 2P'", "cursive"],
        body: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}
