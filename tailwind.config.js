/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for App Router
    './pages/**/*.{js,ts,jsx,tsx}', // for Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'], // this will use the custom Inter font from next/font
        sans: ['var(--font-inter)', 'sans-serif'], // fallback
      },
    },
  },
  plugins: [],
}
