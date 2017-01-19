module.exports = (config) => [
    require("stylelint")(),
    require("postcss-import")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            headerHeight: "46px",
            lineHeightNormal: "1.5",
            lineHeightHeading: "1.2",
            colorPrimaryDark: "#107491",
            colorPrimary: "#313B5D",
            colorSecondaryDark: "#181D2E",
            colorSecondary: "#46BE77",
            colorNeutralDark: "#111",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FAFAFA",
            colorText: "#555",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
