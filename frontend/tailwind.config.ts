import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-dark': '#111921',
        'background-light': '#f6f7f8',
        brand: {
          50: '#eff6ff',
          500: '#248aeb',
          600: '#1e6fc2',
          900: '#0b0f14',
        },
        primary: ({ theme }) => theme('colors.brand.500'),
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        xs: '0.125rem',
        lg: '0.5rem',
        xl: '0.75rem',
        'r-12px': '0.75rem',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(36, 138, 235, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(36, 138, 235, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(36, 138, 235, 0)' },
        },
        'spring-pop': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spring-pop': 'spring-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      }
    },
  },
  plugins: [],
} satisfies Config