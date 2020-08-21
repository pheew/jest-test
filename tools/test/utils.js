const execa = require("execa");

module.exports.getWorkspaces = async () => {
  return execa
    .command(`yarn workspaces info`)
    .then(({ stdout }) => JSON.parse(stdout));
};

module.exports.createJestProjects = (name, path) => [
  {
    displayName: `${name}: testing-library`,
    testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
    rootDir: path,
  },
  {
    displayName: `${name}: enzyme`,
    testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
    rootDir: path,
  },
];
