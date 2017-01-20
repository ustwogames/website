module.exports = (config) => [
    require("stylelint")(),
    require("postcss-import")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            headerHeight: "46px",
            lineHeightNormal: "1.6",
            lineHeightHeading: "1.2",
            colorPrimaryDark: "#107491",
            colorPrimary: "#556275",
            colorSecondaryDark: "#050607",
            colorSecondary: "#050607",
            colorNeutralDark: "#111",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FAFAFC",
            colorHover: "#3500EF",
            colorText: "#556275",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
