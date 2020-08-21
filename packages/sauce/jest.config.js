console.log("in sauce test config");

const { sharedConfig, utils } = require("@tools/test");

module.exports = {
  ...sharedConfig,
  projects: utils.createJestProjects("sauce", process.cwd()),
};
