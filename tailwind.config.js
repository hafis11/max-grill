module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bg/altumcode-U0tBTn8UR8I-unsplash.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
