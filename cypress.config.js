const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    Json: false,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  // video: true,
  // videosFolder: "cypress/videos",
  // videoCompression: 32,
  // videoUploadOnPasses: true,
});
