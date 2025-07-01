const path = require('node:path');

module.exports = {
  preset: 'react-native',
  setupFiles: [
    path.resolve(
      __dirname,
      '../../node_modules/react-native-gesture-handler/jestSetup.js',
    ),
  ],
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-jest.ts')],
  transform: {
    '^.+.(js|ts|tsx)$': [
      'babel-jest',
      { configFile: path.resolve(__dirname, './babel.config.cjs') },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|i18n-js|@wuba|zrender|echarts|@sumsub)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
};
