/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth': {
          50: '#f8f5f0',
          100: '#e8e2d5',
          200: '#d1c5ab',
          300: '#b5a37c',
          400: '#9d8759',
          500: '#8a7247',
          600: '#6d5a3a',
          700: '#564731',
          800: '#473b2b',
          900: '#3d3326',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 