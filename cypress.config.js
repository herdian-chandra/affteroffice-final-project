const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.agoda" });
dotenv.config({ path: ".env.amazon" });
dotenv.config({ path: ".env.youtube" });

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    env: {
      BASE_URL_AGODA: process.env.BASE_URL_AGODA,
      BASE_URL_AMAZON: process.env.BASE_URL_AMAZON,
      BASE_URL_YOUTUBE: process.env.BASE_URL_YOUTUBE,
    },
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
