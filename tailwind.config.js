/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0000',
          dark: '#cc0000',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        accent: {
          DEFAULT: '#ff6600',
          light: '#ff8533',
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 1s infinite',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      }
    },
  },
  plugins: [],
};
