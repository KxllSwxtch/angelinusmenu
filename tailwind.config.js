/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#f4e6a9",
          DEFAULT: "#d4af37",
          dark: "#9a7d22",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        gold: "0 0 10px rgba(212, 175, 55, 0.5)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
}
