/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#FBF1FE",
          100: "#F7E2FD",
          200: "#EDC0FB",
          300: "#E4A3FA",
          400: "#DA82F8",
          500: "#D165F6",
          600: "#BE21F2",
          700: "#970CC6",
          800: "#630882",
          900: "#340443",
          950: "#1A0222",
        },
      },
    },
  },
  plugins: [],
};
