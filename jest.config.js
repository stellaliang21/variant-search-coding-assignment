module.exports = {

  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],

  clearMocks: true,


  collectCoverageFrom: ['client/src/**/*.{js,jsx,mjs,css}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx', 'css'],

  setupFiles: ['<rootDir>/enzyme.config.js'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  verbose: true,

};