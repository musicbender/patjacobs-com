module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/.cache',
    '/public/',
    '/.storybook',
    '/.git',
    '/.next',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@configs(.*)$': '<rootDir>/src/configs/$1',
    '^@hooks': '<rootDir>/src/hooks/index.ts',
    '^@store': '<rootDir>/src/store/index.ts',
    '^@store(.*)$': '<rootDir>/src/store/$1',
    '^@types': '<rootDir>/src/types/$1',
    '^@util(.*)$': '<rootDir>/src/util/$1',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@reducers': '<rootDir>/src/reducers/index.ts',
    '^@middleware': '<rootDir>/src/middleware/index.ts',
    '^@styles(.*)$': '<rootDir>/src/styles/$1',
    '^@queries(.*)$': '<rootDir>/src/queries/$1',
    '^@actions(.*)$': '<rootDir>/src/actions/$1',
    '^@assets(.*)$': '<rootDir>/src/assets/$1',
    '^@public(.*)$': '<rootDir>/public/$1',
    '^@test(.*)$': '<rootDir>/test/$1',
  },
  verbose: false,
};
