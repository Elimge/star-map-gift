/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0f172a',
        'star-blue': '#1e3a8a',
        'dusk-blue': '#3b82f6',
        'star-yellow': '#facc15',
        'moon-glow': '#f5f3e7',
      }
    },
  },
  plugins: [],
}

