/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
        'color-bg': 'var(--color-bg)',
        'color-text': 'var(--color-text)',
        'color-input': 'var(--color-input)',
        'color-button': 'var(--color-button)',
        'color-border': 'var(--color-border)',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
