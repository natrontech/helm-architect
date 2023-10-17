/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDF1FF", // also secondary color
          100: "#D0D5FF",
          200: "#B3B9FF",
          300: "#969EFF",
          400: "#7984EC",
          500: "#7984EC",
          600: "#5C6BCF",
          700: "#3D53B3",
          800: "#163C98",
          900: "#00277D"
        },
        secondary: "#EDF1FF", // also primary color
        accent: {
          50: "#FFF7FF",
          100: "#FFD9FF",
          200: "#FFBBF3",
          300: "#FF9ED7",
          400: "#FF80BB",
          500: "#FF63A0",
          600: "#F34486",
          700: "#D41D6D",
          800: "#B50055",
          900: "#97003E"
        }
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" }
      },
      height: {
        128: "32rem"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("flowbite/plugin")
  ],
  daisyui: {
    logs: false,
    themes: ["emerald"]
  }
};
