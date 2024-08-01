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
      boxShadow: {
        custom: '20px 20px 85px #b6b6b6, -20px -20px 85px #f6f6f6;',
      },
      borderRadius: {
        custom: '50px',
      },
      colors: {
        customGray: '#d6d6d6',
        sidePanelsColor: '#64748b',
      },
      keyframes: {
        autoRotateAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        autoRotate: 'autoRotateAnimation 1s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;



