import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          blue: "#2540DA",
          "blue-deep": "#1B2FB0",
          "blue-soft": "#3D58F0",
        },
        surface: {
          navy: "#0B1736",
          "navy-2": "#111E45",
          cream: "#F3ECDD",
          "cream-2": "#F7F1E4",
          "blue-tint": "#EAF0FF",
          "blue-tint-2": "#F2F5FF",
        },
        ink: {
          DEFAULT: "#0A1426",
          muted: "#5B6478",
          subtle: "#8A93A8",
        },
        line: {
          DEFAULT: "#E5E9F2",
          dark: "#1F2C57",
        },
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "28px",
        hero: "36px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(11, 23, 54, 0.06)",
        nav: "0 8px 32px rgba(11, 23, 54, 0.08)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
