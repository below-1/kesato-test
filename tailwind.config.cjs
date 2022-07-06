const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        ksblack: '#211e1e',
        'ksblack-aug': '#1c0c0c',
        ksred: '#ff0000',
        'ksred-aug': '#c60000',
        ksgreen: '#65c800'
      },
      fontFamily: {
        display: ["KaushanScript", "san-serif"],
        body:  ["OpenSans", "sans"]
      }
    },
  },

  plugins: [],
};

module.exports = config;
