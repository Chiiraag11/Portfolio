/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
      },
      colors: {
        /* ── Surfaces ── */
        void:     '#080B14',
        night:    '#0D1120',
        surface:  '#111827',
        overlay:  '#161D2F',

        /* ── Brand ── */
        indigo: {
          DEFAULT: '#6366F1',
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        emerald: {
          DEFAULT: '#34D399',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
        },

        /* ── Text ── */
        ink: {
          primary:   '#F4F4F5',
          secondary: '#A1A1AA',
          muted:     '#52525B',
          accent:    '#818CF8',
        },

        /* ── Borders (as flat values for Tailwind border-* classes) ── */
        border: {
          subtle:  'rgba(255,255,255,0.05)',
          default: 'rgba(255,255,255,0.08)',
          strong:  'rgba(255,255,255,0.14)',
          accent:  'rgba(99,102,241,0.35)',
        },

        /* ── Legacy aliases ── */
        slate: {
          950: '#020617',
        },
      },

      /* ── Spacing / sizing ── */
      maxWidth: {
        '8xl': '88rem',
      },

      /* ── Border radius ── */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      /* ── Backdrop ── */
      backdropBlur: {
        xs: '2px',
      },

      /* ── Animations ── */
      animation: {
        'gradient-x':  'gradient-x 8s ease infinite',
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':   'spin 20s linear infinite',
        'shimmer':     'shimmer 2.5s infinite',
        'pulse-glow':  'pulse-glow 3s ease-in-out infinite',
      },

      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':       { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%':   { 'background-position': '-1000px 0' },
          '100%': { 'background-position':  '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%':       { opacity: '1' },
        },
      },

      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },

      /* ── Box shadows ── */
      boxShadow: {
        'glow-indigo': '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-cyan':   '0 0 40px rgba(34, 211, 238, 0.10)',
        'card':        '0 4px 16px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)',
        'card-hover':  '0 12px 40px rgba(0,0,0,0.55), 0 0 40px rgba(99,102,241,0.12)',
      },
    },
  },
  plugins: [],
}
