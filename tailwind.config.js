/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "loading-cubic-bezier": "cubic-bezier(0, 1, 1, 0)",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "translate(-50%, -50%) scale(0)" },
          "60%": { transform: "translate(-50%, -50%)  scale(1)" },
        },
        pulse: {
          "0%, 60%, 100%": { transform: "scale(1)" },
          "80%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 1s linear infinite",
        pulse: "pulse 1s linear infinite",
      },
      colors: {
        primary: {
          100: "#D7B4FA",
          200: "#A25DE8",
          300: "#7711DD",
          400: "#49068C",
          500: "#130026",
        },
        support: {
          100: "#FBFAFC",
          200: "#EBE8ED",
          300: "#CAC6CE",
          400: "#ACA7B0",
          500: "#9C97A1",
          600: "#8F8B94",
          700: "#736E78",
          800: "#544E59",
          900: "#2D2A30",
          1000: "#070708",
        },
      },
      spacing: {
        vw160px: "12.5vw",
        vw64px: "5vw",
        vw64px: "5vw",
        vh160px: "22.222vh",
      },
      backgroundImage: {
        "background-container": "url('../public/background-container.webp')",
      },
      boxShadow: {
        container: "0px 0px 8px 2px rgba(0, 0, 0, 0.05);",
        navbar: "4px 0px 5px 0px rgba(0,0,0,0.05);",
      },
      screens: {
        sm: { max: "640px" }, // Telefones pequenos e smartphones
        md: { max: "768px" }, // Tablets em orientação retrato
        lg: { max: "1024px" }, // Tablets em orientação paisagem e laptops
        xl: { max: "1280px" }, // Laptops e desktops de tamanho médio
        "2xl": { max: "1536px" }, // Desktops de tamanho grande
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "2.5xl": "2rem",
      },
    },
  },
  plugins: [],
};
