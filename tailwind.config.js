/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      scrollbar: {
        width: '8px',
        thumb: {
          background: '#888',
          borderRadius: '10px',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        coinSpin: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        waveScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-160px 0' },
        },
        swim: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        castLine: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-288px 0' }
        }
      },
      animation: {
        coinSpin: 'coinSpin 0.7s steps(7) infinite',
        sunSpin: 'coinSpin 2s steps(5) infinite',
        waveScroll: 'waveScroll 2s linear infinite',
        swim: 'swim 10s linear infinite',
        fishSwim: 'coinSpin 1s steps(7) infinite',
        castLine: 'castLine 3s steps(3) infinite'
      },
    },
  },
  plugins: [],
}