console.log("in awesome test config");

const sharedPackageConfig = require("@tools/test/package.jest.config.js");

module.exports = {
  ...sharedPackageConfig,
};
