/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F1ED',
          200: '#EDE4DC',
          300: '#DED1C4',
        },
        brand: {
          yellow: '#FFE862',
          gold: '#FFD640',
          dark: '#242424',
          hairline: '#ACACAC',
          muted: '#636363',
        },
        accent: {
          DEFAULT: '#FFE862',
          hover: '#FFD640',
          dark: '#242424',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
