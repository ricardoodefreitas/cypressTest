module.exports = {
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  reporter: "spec",

  e2e: {
      setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.amazon.com.br",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true
  },
};