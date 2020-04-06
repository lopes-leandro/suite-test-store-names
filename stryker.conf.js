/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "typescript",
  packageManager: "npm",
  reporters: ["html", "progress", "dashboard"],
  testRunner: "mocha",
  transpilers: ["typescript"],
  testFramework: "mocha",
  coverageAnalysis: "perTest",
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts"],
};
