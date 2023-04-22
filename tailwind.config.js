/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
      },
    },
    extend: {
      backgroundImage: {
        summerSaleBg: "url('./assets/images/summerSaleBanner.jpg')",
        mensBg: "url('./assets/images/mens.jpg')",
        womensBg: "url('./assets/images/womensSquare.jpg')",
        electronicsBg: "url('./assets/images/electronics.jpg')",
        jewelleryBg: "url('./assets/images/jewellery.jpg')",
      },
    },
  },
  plugins: [],
};
