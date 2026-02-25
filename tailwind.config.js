/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "rgba(0, 240, 255, 1)",
        "purple-primary": "#6B3FA0",
        "purple-deep": "#4A2370",
        "cyan-primary": "#3DBFBF",
        "cyan-light": "#5CDADA",
        "dark-bg": "#0B0B0F",
        "dark-card": "#131318",
        "dark-border": "#1F1F28",
        "text-main": "#E8E8EC",
        "text-muted": "#8888A0",
        "red-main": "#E8445A",
      },
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
        jetbrains: ['"JetBrains Mono"', "monospace"],
        secondary: ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #6B3FA0, #3DBFBF)",
        "gradient-hover": "linear-gradient(135deg, #8B5FD0, #5CDADA)",
      },
    },
  },
  plugins: [],
};
