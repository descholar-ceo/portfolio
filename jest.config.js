module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/__tests__/**',
      '!src/entry/index.js',
      '!src/entry/server.js',
      '!src/utils/customMessages.js',
      '!webpack.config.js',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/__tests__'],
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          'jest-transform-stub',
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
    setupFiles: ['<rootDir>/enzyme.config.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    testMatch: ['src/__tests__/**/*.test.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './coverage/html-report',
          filename: 'report.html',
          expand: true,
        },
      ],
    ],
    collectCoverage: true,
  };
  