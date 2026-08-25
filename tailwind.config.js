/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        raised: 'rgb(var(--bg-raised-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        soft: 'rgb(var(--ink-soft-rgb) / <alpha-value>)',
        faint: 'rgb(var(--ink-faint-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        'accent-blue': 'rgb(var(--accent-blue-rgb) / <alpha-value>)',
        'accent-coral': 'rgb(var(--accent-coral-rgb) / <alpha-value>)',
        lime: 'rgb(var(--lime-rgb) / <alpha-value>)',
        inkbg: 'rgb(var(--ink-bg-rgb) / <alpha-value>)',
        deepblue: 'rgb(var(--deep-blue-rgb) / <alpha-value>)',
        electric: 'rgb(var(--electric-blue-rgb) / <alpha-value>)',
        rust: 'rgb(var(--rust-rgb) / <alpha-value>)',
        line: 'var(--line)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
