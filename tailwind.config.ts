import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0E7C7B',
          primaryDark: '#095857',
          accent: '#F2A93B',
          ink: '#0B1B1E',
          muted: '#5B6B6A',
          surface: '#F6F9F8',
          border: '#E1E9E8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'hero-in': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1.08) translate(0, 0)' },
          '50%': { transform: 'scale(1.16) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1.08) translate(0, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(10px)' },
          '60%': { opacity: '1', transform: 'scale(1.03) translateY(0)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.15)' },
        },
      },
      animation: {
        'hero-in': 'hero-in 900ms ease-out forwards',
        'ken-burns': 'ken-burns 18s ease-in-out infinite',
        'fade-up': 'fade-up 700ms ease-out both',
        'pop-in': 'pop-in 800ms cubic-bezier(0.34,1.56,0.64,1) both',
        float: 'float 5s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
