/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('node:path');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  /**
   * Metro configuration
   * https://facebook.github.io/metro/docs/configuration
   *
   * @type {import('metro-config').MetroConfig}
   */
  const config = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      // This is needed
      unstable_enablePackageExports: true,
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'mjs'],
      resolveRequest: (context, moduleName, platform) => {
        if (moduleName === 'trezor-address-validator') {
          // this module's package.json links to the source code in the `main` field.
          // source code uses node's Buffer which is not provided by the hermes.
          // that's why we need to use browser's dist of the package, that has
          // an appropriate shim for Buffer API.
          return {
            filePath: path.resolve(
              __dirname,
              'node_modules/trezor-address-validator/dist/wallet-address-validator.min.js',
            ),
            type: 'sourceFile',
          };
        }
        // Optionally, chain to the standard Metro resolver.
        return context.resolveRequest(context, moduleName, platform);
      },
    },
  };

  return mergeConfig(defaultConfig, config);
})();
