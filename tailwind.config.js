/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "k-gray-color": "#F0F2F3",
        "k-font-color": "#272343",
        "k-sky-color": "#029FAE",
        "k-blue-color": "#007580",
        "k-green-color": "#01AD5A",
        "k-tomato-color": "#F5813F",
        "k-font-color-primary": "#636270",
        "k-font-color-secondary": "#9A9CAA",
      },
      fontFamily: {
        "k-font": "Inter,sans-serif",
      },
      backgroundImage: {
        "k-bg-image": "url('./images/BGShapes.png')",
      },
    },
  },
  plugins: [],
};
