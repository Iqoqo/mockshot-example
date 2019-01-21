const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  rootDir: ".",
  verbose: true, 
  globals: {
    "ts-jest": {
      isolatedModules: true,
      tsConfig: "tsconfig.json"
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};
