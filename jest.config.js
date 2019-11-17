module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/.cache", "/public/"],
  testRegex: '(/.*|(\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.jsx?$": "<rootDir>/test/transform.js",
  },
  verbose: false
}
