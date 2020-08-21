console.log("in awesome test config");

const { sharedConfig, utils } = require("@tools/test");

module.exports = {
  ...sharedConfig,
  projects: utils.createJestProjects("awesome", process.cwd()),
};
