// next-i18next.config.js
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",

  react: {
    useSuspense: false,
  },
};
