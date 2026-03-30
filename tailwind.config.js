/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(37, 99, 235, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.2), transparent 45%), linear-gradient(180deg, #020617 0%, #0f172a 100%)'
      }
    }
  },
  plugins: []
};
