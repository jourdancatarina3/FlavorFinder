/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#E5EBE5',
          DEFAULT: '#D0DDD0',
          dark: '#B8C5B8',
        },
        sage: {
          50: '#F5F7F5',
          100: '#E5EBE5',
          200: '#D0DDD0',
          300: '#B8C5B8',
          400: '#9BAA9B',
          500: '#7E8F7E',
          600: '#637463',
          700: '#4B594B',
          800: '#334033',
          900: '#1A261A',
        },
        herb: {
          light: '#E8F3E8',
          DEFAULT: '#86B886',
          dark: '#5A8C5A',
        },
        tomato: {
          light: '#FFE8E8',
          DEFAULT: '#FF6B6B',
          dark: '#E64545',
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(99, 116, 99, 0.1), 0 4px 6px -2px rgba(99, 116, 99, 0.05)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

