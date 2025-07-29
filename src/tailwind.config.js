module.exports = {
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 0.5s ease-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(2)' },
        },
      },
    },
  },
  plugins: [],
};
