module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dustyrose: "#D8A7A7",
        olive: "#708B75",
        cream: "#FAF3E0",
        brass: "#B08D57"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"]
      },
      backgroundImage: {
        paper: "url('/paper-texture.png')"
      }
    }
  },
  plugins: []
};
