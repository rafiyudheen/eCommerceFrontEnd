import("tailwindcss").Config;
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light", // Default light theme
      "dark", // Dark theme
      "cupcake", // You can add custom themes or use built-in ones
    ],
  },
};
