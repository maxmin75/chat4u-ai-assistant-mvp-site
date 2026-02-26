import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f6f7f3',
        paper: '#fffef9',
        ink: '#0e1916',
        accent: '#0c8764',
        accent2: '#f35c2f',
        line: '#d8ddd1'
      },
      boxShadow: {
        card: '0 16px 40px rgba(14, 25, 22, 0.08)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 650ms cubic-bezier(0.2, 0.7, 0.2, 1) both'
      }
    }
  },
  plugins: []
};

export default config;
