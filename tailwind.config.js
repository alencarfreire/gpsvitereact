/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backhero: "url('/src/assets/capagpstransfer.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
