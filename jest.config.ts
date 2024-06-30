import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'ts-jest',
  // moduleNameMapper: {
  //   '^@components/(.*)$': '<rootDir>/src/components/$1',
  //   '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
  //   '^@styles/(.*)$': '<rootDir>/src/app/styles/$1',
  //   '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  //   '^@models/(.*)$': '<rootDir>/src/models/$1',
  //   '^@store/(.*)$': '<rootDir>/src/store/$1',
  // },
  // testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  // },
  // transformIgnorePatterns: ['/node_modules/'],
};

export default createJestConfig(customConfig);
