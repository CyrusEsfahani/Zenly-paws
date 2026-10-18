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
        ink: {
          DEFAULT: "#1A2F36",
          muted: "#4A6168",
          soft: "#6F848B",
        },
        cream: {
          DEFAULT: "#F7F3EA",
          deep: "#EDE6D6",
          paper: "#FFFCF6",
        },
        sage: {
          DEFAULT: "#2F6F6A",
          mist: "#E4F1EE",
        },
        teal: {
          DEFAULT: "#2FA4B0",
          deep: "#1E7C89",
          bright: "#4EC4C8",
          pad: "#3EBFAE",
        },
        sand: "#D9C8B0",
        blush: "#E8C9B8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        lift: "0 18px 50px -24px rgba(26, 47, 54, 0.28)",
        card: "0 10px 30px -18px rgba(26, 47, 54, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
