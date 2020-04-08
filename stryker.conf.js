/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "typescript",
  packageManager: "npm",
  reporters: ['clear-text', 'progress', 'dots', 'dashboard', 'html'],
  testFramework: "mocha",
  testRunner: "mocha",
  transpilers: ["typescript"],
  coverageAnalysis: "perTest",
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts"],
  plugins: ['@stryker-mutator/*']
};
