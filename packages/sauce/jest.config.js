console.log("in sauce test config");

const sharedPackageConfig = require("@tools/test/package.jest.config.js");

module.exports = {
  ...sharedPackageConfig,
};
