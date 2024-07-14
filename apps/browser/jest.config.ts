import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  coverageProvider: 'v8',
  testEnvironment: 'node',
};

module.exports = createJestConfig(customJestConfig);
