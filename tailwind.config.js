/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        brand: 'var(--brand)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)'
        }
      },
      borderColor: {
        skin: 'var(--border)'
      },
      boxShadow: {
        card: 'var(--shadow-card)'
      }
    }
  },
  plugins: []
};
