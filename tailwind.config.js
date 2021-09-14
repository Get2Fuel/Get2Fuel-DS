module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          a100: "#B9F6CA",
          a200: "#69F0AE",
          a400: "#00E676",
          a700: "#00C853",
        },
        blue: {
          a100: "#8C9EFF",
          a200: "#536DFE",
          a400: "#3D5AFE",
          a700: "#304FFE",
        },
        purple: {
          a100: "#EA80FC",
          a200: "#E040FB",
          a400: "#D500F9",
          a700: "#AA00FF",
        },
        yellow: {
          a100: "#FFFF8D",
          a200: "#FFFF00",
          a400: "#FFEA00",
          a700: "#FFD600",
        },
        dark: {
          bg: "#262626",
          primary: "#464646",
          placeholder: "#7C7C7C",
          text: "#DFDFDF",
        },
        light: {
          bg: "#F1F1F1",
          primary: "#CBCBCB",
          placeholder: "#7C7C7C",
          text: "#323232",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active", "focus"],
      backgroundColor: ["active", "focus"],
      textAlign: ["active", "focus"],
    },
  },
  plugins: [],
};
