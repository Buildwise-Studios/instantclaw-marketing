module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        muted: 'var(--muted)',
        'warm-bg': '#F8F7F5',
        'warm-gold': '#D4A574',
        'dark-text': '#1A1A1A',
        'brand-red': '#c53131',
      },
    },
  },
  plugins: [],
}
