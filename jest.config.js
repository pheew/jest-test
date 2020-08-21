const shared = require("@tools/test/shared.jest.config");
const { getWorkspaces, createJestProjects } = require("@tools/test/utils");
//
const getConfig = async () => {
  const workspace = await getWorkspaces();

  const projects = Object.entries(workspace).reduce(
    (mem, [name, { location }]) => {
      return [...mem, ...createJestProjects(name, location)];
    },
    []
  );

  return {
    ...shared,
    rootDir: "./",
    projects,
  };
};

console.log(typeof getConfig);
module.exports = getConfig;
