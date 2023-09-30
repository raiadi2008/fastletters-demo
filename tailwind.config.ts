import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#CB6CE6",
        accent2: "#5271FF",
        secondary: "#0D1321",
        secondaryLight: "#343a40",
        main: "#F2F2F2",
        mainDark: "#ADB5BD",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {},
      maxWidth: {
        website: "1380px",
      },
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
      addVariant("child-focus", "& > *:focus")
      addVariant("child-active", "& > *:active")
    }),
  ],
}
export default config
