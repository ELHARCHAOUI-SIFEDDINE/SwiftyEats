/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        pulse: "pulse 2s infinite ease-in-out",
        spinner: "spinner 0.6s linear infinite",
      },
      colors: {
        gray: {
          100: "#f8f8f8",
          300: "#f0f0f0",
          400: "#e0e0e0",
        },
        "loader-blue": "#3498db",
      },
    },
  },
  plugins: [],
};
