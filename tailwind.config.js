/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fefefe",
          "200": "#8d8d8d",
          "300": "#757575",
          "400": "#030303",
          "500": "#020202",
          "600": "#010101",
          "700": "rgba(255, 255, 255, 0.7)",
        },
        dimgray: "#505050",
        white: "#fff",
        black: "#000",
        aqua: "#00ffff",
        gold: "#ffd800",
        crimson: "#dc4040",
        tomato: {
          "100": "#f55959",
          "200": "#ff4343",
        },
        palegreen: "#65e674",
        springgreen: "rgba(0, 255, 102, 0.8)",
        royalblue: "#006bee",
        gainsboro: "#e6e6e6",
        "bgdanoff-new-fil": "#468d8d",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-mono": "'IBM Plex Mono'",
        vt323: "VT323",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
        mini: "15px",
        "13xl": "32px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "5xs": "8px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
