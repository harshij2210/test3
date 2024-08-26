/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutrals-13": "#ebebeb",
        "neutrals-03": "#272727",
        "neutrals-01": "#000",
        "primary-shade": "#305cba",
        "neutrals-14": "#fff",
        "primary-01": "#004094",
        royalblue: "#457ef9",
        cornflowerblue: {
          "100": "#81a5f1",
          "200": "#759cf0",
        },
        "neutrals-04": "#3b3b3b",
        mediumseagreen: "#61cd79",
        lightgray: "#d1d1d1",
        "primary-02": "#69d876",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "21xl": "40px",
        "31xl": "50px",
        "smi-2": "12.2px",
      },
    },
    fontSize: {
      base: "1rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "53xl": "4.5rem",
      "9xl": "1.75rem",
      "37xl": "3.5rem",
      "26xl": "2.813rem",
      "15xl": "2.125rem",
      "6xl": "1.563rem",
      "8xl": "1.688rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
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
