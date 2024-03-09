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
        // 'present': "#e4a81d",
        // 'correct': "#43a047",
        // 'absent': "#757575",
        // 'error': '#bb3429'

          'present': 'slate-800',
          'correct': 'green-600',
          'absent': 'yellow-600',
          'error': 'red-600'
      },
    },
  },
  plugins: [],
};
export default config;
  


// --color-absent: #757575;
// --color-present: #e4a81d;
// --color-correct: #43a047;
// --color-error: #bb3429;

// --bg-absent: #757575;
// --bg-present: #e4a81d;
// --bg-correct: #43a047;
// --bg-error: #bb3429;

