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
      keyframes: {
        heroTextureDrift: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        heroScrollCue: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hero-texture': 'heroTextureDrift 22s ease-in-out infinite',
        'hero-scroll-cue': 'heroScrollCue 2.2s ease-in-out infinite',
        'hero-fade-up': 'heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
