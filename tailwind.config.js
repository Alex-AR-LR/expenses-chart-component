/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "serif"],
      },
      colors: {
        main: {
          red: "hsl(10, 79%, 65%)",
          cyan: "hsl(186, 34%, 60%)",
        },
        neutral: {
          brown: "hsl(25, 47%, 15%)",
          "medium-brown": "hsl(28, 10%, 53%)",
          cream: "hsl(27, 66%, 92%)",
          orange: "hsl(33, 100%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
