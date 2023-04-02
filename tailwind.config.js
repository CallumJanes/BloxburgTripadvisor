/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      loginbg: "url(../Images/Login.jpg)",
      regbg: "url(../Images/Register.jpg)",
      homebg: "url(../Images/Home.jpg)",
    },
  },
  plugins: [],
};
