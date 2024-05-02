const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}',
  //   'pages/**/*.{js,jsx,ts,tsx}',
  //   'src/components/**/*.{js,jsx,ts,tsx}',
  //   '!src/data/**',
  //   '!pages/api/**',
  //   '!src/pages/_document.tsx',
  //   '!src/pages/_app.tsx',
  // ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/src/data/(.*)$': '<rootDir>/src/data/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
