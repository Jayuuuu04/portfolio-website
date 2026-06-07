import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 80px rgba(14, 165, 233, 0.18)',
      },
      colors: {
        primary: {
          DEFAULT: '#38bdf8',
          light: '#a5f3fc',
          dark: '#0f172a',
        },
        secondary: {
          DEFAULT: '#818cf8',
          light: '#c7d2fe',
          dark: '#312e81',
        },
        accent: {
          DEFAULT: '#f472b6',
          light: '#fecdd3',
          dark: '#831843',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.22), transparent 45%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
};

export default config;
