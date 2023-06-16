module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: {
          100: "#f5f5f5",
          300: "#dbdbdb",
          400: "#c4c4c4",
          600: "#787486",
          700: "#615e6d",
          900: "#0d062d",
          "300_01": "#e0e0e0",
        },
        white: { A700: "#ffffff" },
        purple: { 100: "#e4ccfd" },
        red: {
          100: "#f3d7da",
          300: "#d8727d",
          "300_01": "#d15b67",
          "300_19": "#d8727d19",
        },
        blue_gray: { 100: "#d8d9db", 900: "#292d32", "100_01": "#d9d9d9" },
        amber: { 700: "#ffa500", "300_b2": "#fcd64ab2" },
        blue: { A100: "#76a4ea" },
        green: { 300: "#8bc48a", 400: "#67b266", "300_33": "#83c29d33" },
        deep_purple: {
          A400_0f: "#4f2fe50f",
          A400_96: "#4f2fe596",
          A400: "#5030e5",
        },
        deep_orange: { 400: "#d58c48", A100_33: "#dfa87433" },
        light_green: { 500: "#7ac555" },
        colors: "#5030e514",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 44px  84px 6px #d8d9db" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
