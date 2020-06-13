module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/tests/**',
      '!src/utils/customMessages.js',
      '!src/entry/index.js',
      '!webpack.config.js',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/tests'],
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
    testMatch: ['src/tests/**/*.test.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
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
  