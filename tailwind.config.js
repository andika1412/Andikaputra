/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#DCDCDC",
        smalltext: "#7D839C",
        bigtext: "#30385D",
        putih: "#fff",
        orenji: "#F54E00",
        batas: "#BEBEBE",
        paragraf: "#383C4F",
        abuabu: "#4D4D4D",
        background: "#F7F7FA",
      },
      fontFamily: {
        body: ["Inter"],
      },
      animation: {
        "bounce-slow": "bounce 0.9s ease-in-out infinite",
        "bounce-fast": "bounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
