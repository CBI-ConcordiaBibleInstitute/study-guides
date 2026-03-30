/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          200: '#d9a2ad',
          300: '#bf6e81',
          500: '#892334',
          600: '#741c2b'
        },
        accent: {
          300: '#e4c78f',
          400: '#d4b06a',
          500: '#be9750'
        },
        bg: {
          DEFAULT: '#120f14',
          soft: '#19141d'
        },
        card: {
          DEFAULT: '#1d1822',
          elevated: '#241d2c'
        },
        text: {
          primary: '#f6f1f4',
          secondary: '#b9aeb6'
        }
      },
      boxShadow: {
        glow: '0 16px 36px rgba(137, 35, 52, 0.35)',
        card: '0 18px 45px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};
