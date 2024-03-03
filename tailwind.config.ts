import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'regular-free': "#94a3b8",
        'yellow-incorrect': "#eab308",
        'green-correct': "#22c55e",
        'free': "#94a3b8",
        'incorrect': "#eab308",
        'correct': "#22c55e",
        'error': "#999999"
      },
    },
  },
  plugins: [],
};
export default config;
