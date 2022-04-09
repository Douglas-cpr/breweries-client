/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
  },
  testMatch: [
    '**/*.spec.ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue']
};