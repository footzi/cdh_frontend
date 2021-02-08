module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  verbose: true,
};
