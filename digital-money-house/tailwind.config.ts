import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-1": "#201F22",
        "dark-2": '#3A393E',
        "green-1": '#C1FD35',
        "gray-1": '#EEEAEA',
        "gray-2": '#D9D9D9',
        "error-1": "#DA0000",
        "error-2": "#EE3838",
        "select-1": "#D2FFEC",
        "button-1": "#CECECE",
      }
    },
  },
  plugins: [],
};
export default config;
