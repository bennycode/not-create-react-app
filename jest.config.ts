import type {JestConfigWithTsJest} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/index.ts', '!**/start*.ts', '!**/webpack.config.ts'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: [],
  testEnvironment: 'jsdom',
  testRegex: '\\.test\\.tsx?$',
};

export default jestConfig;
