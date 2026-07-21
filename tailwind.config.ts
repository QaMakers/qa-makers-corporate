import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071426',
        'navy-mid': '#0B1930',
        'navy-light': '#10213D',
        electric: '#2F6BFF',
        cyan: '#06B6D4',
        'off-white': '#F4F7FB',
        surface: '#FFFFFF',
        'text-primary': '#172033',
        'text-secondary': '#64748B',
        'text-muted': '#94A3B8',
        border: '#DCE4EE',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2F6BFF, #06B6D4)',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
} satisfies Config;
