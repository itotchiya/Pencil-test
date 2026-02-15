/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4644E',
        'primary-light': '#FEF0E8',
        background: '#FFFBF7',
        'dark-bg': '#2D2522',
        'dark-card': '#3D3230',
        'text-primary': '#2D2522',
        'text-secondary': '#6B5E5E',
        'text-muted': '#A89890',
        border: '#E8DDD8',
        'card-bg': '#FAF6F3',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 40px -20px rgba(45, 37, 34, 0.12)',
        'button': '0 8px 20px rgba(212, 100, 78, 0.25)',
        'screenshot': '0 30px 80px -20px rgba(45, 37, 34, 0.15)',
      },
    },
  },
  plugins: [],
}
