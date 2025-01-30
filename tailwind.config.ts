import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0B0D",
        muted: "#0C0B0D",
        text: "#FFFFFF",
        primary: "#F2C0D3",
        secondary: "#A07DF4",
        yellow: "#FFD700",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sourGummy: ["Sour Gummy", "sans-serif"], // Add Sour Gummy font
      },
    },
  },
  plugins: [],
};

export default config;