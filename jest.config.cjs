const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset({
  useESM: true,
}).transform;

module.exports = {
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  setupFiles: ["<rootDir>/__test__/setup/loadEnv.ts"],
};
