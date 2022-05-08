const jestConfig = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: 'src',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    // alias pathの解決
    '^@/(.*)$': '<rootDir>/$1',
  },
  testRegex: '.*\\.spec\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  setupFilesAfterEnv: ['<rootDir>../jest.setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/__test__/__mock__'],
  coverageDirectory: '<rootDir>../coverage',
  testEnvironment: 'node',
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: '<rootDir>../tsconfig.jest.json',
    },
  },
};

export default jestConfig;
