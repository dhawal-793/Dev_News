/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#f3f4f6',
          primary: '#9ca3af',
          secondary:'#6b7280'
        },
        dark: {
          DEFAULT: '#18181b',
          primary: '#27272a',
          secondary:'#71717a'
        },
        'article': {
          light: {
            DEFAULT: '#e2e8f0',
            primary: '#cbd5e1',
            secondary:'#94a3b8'   
          },
          dark: {
            DEFAULT: '#1e293b',
            primary: '#334155',
            secondary:'#475569'
          }
        },
        'loading': {
          light: '#c7d2fe',
          dark: '#6b7280'
        },
        'accent': {
          DEFAULT:'#fb923c',
          primary: '#f97316',
          secondary:'#1e293b'
        },
        'sun': '#f59e0b',
        'moon': '#1e3a8a',
        'cancel':'#dc2626'

      }
    }
  },
  plugins: [],
}