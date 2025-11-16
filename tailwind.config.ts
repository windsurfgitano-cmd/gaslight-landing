import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          lime: "#ccff00",
          green: "#00ff88",
          yellow: "#ffeb3b",
          dark: "#0a0e1a",
          darker: "#050a14",
        },
        leafly: {
          green: "#5CB660",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        "neon-lime": "0 0 20px rgba(204, 255, 0, 0.5)",
        "neon-lime-lg": "0 0 40px rgba(204, 255, 0, 0.7)",
        "neon-green": "0 0 20px rgba(0, 255, 136, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;