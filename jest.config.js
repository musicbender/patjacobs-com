module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/scripts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/.cache',
    '/public/',
    '/.storybook',
    '/.git',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/test/transform.js',
  },
  verbose: false,
};
