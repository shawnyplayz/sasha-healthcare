/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-carousel": "url('/Images/HomeCarouselBackground.png')",
        "home-carousel-color-1":
          "radial-gradient(circle at 50% 50%, #FFFFFF 0%, #F2ECFF 100%)",
        "home-carousel-color-2":
          "linear-gradient(180deg, rgba(226, 247, 255, 0.1) 0%, rgba(0, 162, 229, 0.1) 100%)",
      },
      screens: {
        "ipad-pro": { raw: "(min-width: 1024px) and (max-width: 1366px)" },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      volkhov: ["Volkhov", "serif"],
      SFPRO: ["SFPRODISPLAY", "sans-serif"],
      kyivType: ["KyivType", "sans"],
      vollkorn: ["Vollkorn", "serif"],
      inter: ["Inter", "sans-serif"],
      valueserifprobold: ["Value-Serif-Pro-Bold", "sans-serif"],
      valueserifpromedium: ["Value-Serif-Pro-Medium", "sans-serif"],
      valueserifproregular: ["Value-Serif-Pro-Regular", "sans-serif"],
      gtwalsheimregular: ["GT-Walsheim-Regular-Oblique-Trial", "sans-serif"],
    },
  },
  plugins: [],
};
