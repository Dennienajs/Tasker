module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    minHeight: {
      "1/2": "50%",
      "3/4": "75%",
      "5/6": "83%",
    },

    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  plugins: [],
};
