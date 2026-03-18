/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0B',
        'gray-dark': '#1A1A1A',
        red: {
          deep: '#8B0000',
          primary: '#B11226',
          glow: '#ff1a3a',
        },
        white: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(177,18,38,0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(177,18,38,0.8)' },
        },
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #8B0000, #B11226)',
        'dark-gradient': 'linear-gradient(180deg, #0B0B0B, #1A1A1A)',
      },
    },
  },
  plugins: [],
}
