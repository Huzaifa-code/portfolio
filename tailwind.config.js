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
    },
  },
  plugins: [],
}
