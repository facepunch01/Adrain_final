const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'main-font': ["Montserrat"]
      }, 
    },
    color: {
      main: '#05B1C1',
      secondary: '#333',
    }
  },
  plugins: [],
};

module.exports = config;
