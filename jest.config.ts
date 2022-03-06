/*
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  globals: {},
  maxWorkers: '50%',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  notify: true,
  rootDir: '.',
  setupFiles: [],
  slowTestThreshold: 5,
  testEnvironment: 'node',
  testEnvironmentOptions: {},
  testLocationInResults: true,
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  timers: 'fake',
  verbose: true,
};
