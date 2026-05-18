/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#E5EEF3',
        ink: '#110F0F',
        warm: '#5C5152',
        accent: '#52141B',
        muted: '#A8A3A4',
      },
      fontFamily: {
        serif: ['Literata', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
    },
  },
  plugins: [],
}
