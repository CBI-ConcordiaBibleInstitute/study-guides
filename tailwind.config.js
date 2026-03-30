/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f5',
          500: '#9b2246',
          700: '#6f1832',
          900: '#2b0a14'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(155,34,70,0.35)'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
