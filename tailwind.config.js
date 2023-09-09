/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#222",
        darkest: "#111",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
