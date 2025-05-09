module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  // globalSetup: 'jest-preset-angular/global-setup' ← REMOVA
};
