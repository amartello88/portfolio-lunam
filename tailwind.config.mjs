/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['JetBrains Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#FFFFFF',
        ink: '#0D0D0D',
        gold: '#FF3D8F',
        'gold-light': '#FF66E0',
        rust: '#E8196A',
        sage: '#C4134F',
      },
    },
  },
  plugins: [],
};