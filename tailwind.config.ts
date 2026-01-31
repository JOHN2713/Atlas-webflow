import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'atlas-primary': '#f7f3ed',
        'atlas-dark': '#0d1926',
        'atlas-secondary': '#ebe7e0',
        'atlas-gold': '#d4af37',
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-pt-serif)', 'Georgia', 'serif'],
        display: ['CameraPlainVariable', 'var(--font-source-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
