const path = require('path');

module.exports = {
  stories: ['../docs/**/*.mdx', '../docs/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['@sumsub/react-native-mobilesdk-module'],
        modulesToAlias: {
          'react-native-linear-gradient': 'react-native-web-linear-gradient',
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Filter out third-party props from node_modules except @mui packages.
      propFilter: prop =>
        prop.parent
          ? !/node_modules\/(?!@apex-rn)/.test(prop.parent.fileName)
          : true,
    },
  },
  webpackFinal: async config => {
    if (!config.resolve) {
      config.resolve = { alias: {} };
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@apex-rn/library': path.resolve(__dirname, '../../lib'),
      'trezor-address-validator': path.resolve(
        __dirname,
        '../../../node_modules/trezor-address-validator/dist/wallet-address-validator.min.js',
      ),
    };
    return config;
  },
};
