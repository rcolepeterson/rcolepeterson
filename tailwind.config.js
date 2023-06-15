/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#db33FF",
          secondary: "#70fdff",
          accent: "#4c1a57",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
