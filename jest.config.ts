module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  // globalSetup: 'jest-preset-angular/global-setup',
  cacheDirectory: "<rootDir>/.jest/cache",
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "html", "cobertura"],
  collectCoverageFrom: ["src/**/*.ts", "!src/main.ts"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
};
