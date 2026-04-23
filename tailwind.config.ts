import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0505",
        maroon: {
          950: "#1a0504",
          900: "#350200",
          800: "#5a0300",
          700: "#6C0200",
          600: "#7a0300",
          500: "#900500",
          400: "#a92218",
        },
        gold: {
          500: "#BD953E",
          400: "#C9A350",
          300: "#D4B356",
          200: "#E0C779",
          100: "#EEDFB1",
        },
        cream: "#F5E9D4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-maroon":
          "radial-gradient(1200px 600px at 50% -10%, rgba(189,149,62,0.18), transparent 60%), radial-gradient(1000px 500px at 80% 110%, rgba(144,5,0,0.45), transparent 60%)",
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
