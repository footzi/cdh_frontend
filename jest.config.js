module.exports = {
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^constants/(.*)$': '<rootDir>/constants/$1',
  },
  verbose: true,
};
