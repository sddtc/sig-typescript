module.exports = {
  rootDir: '../',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [ 'ts', 'js' ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: [ '<rootDir>/test/sharing/*.test.(ts)' ],
  testPathIgnorePatterns: [ '<rootDir>/node_modules' ],
  bail: true,
  verbose: true
};
