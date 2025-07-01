/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('node:path');
const {
  getMetroTools,
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');

const metroTools = getMetroTools();
const assetsResolutionFix = getMetroAndroidAssetsResolutionFix();
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  /**
   * Metro configuration
   * https://reactnative.dev/docs/metro
   *
   * @type {import('metro-config').MetroConfig}
   */
  const config = {
    transformer: {
      publicPath: assetsResolutionFix.publicPath,
      getTransformOptions: async () => ({
        // Apply the Android assets resolution fix to the public path...
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
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
              '../../node_modules/trezor-address-validator/dist/wallet-address-validator.min.js',
            ),
            type: 'sourceFile',
          };
        }
        // Optionally, chain to the standard Metro resolver.
        return context.resolveRequest(context, moduleName, platform);
      },
    },
    watchFolders: metroTools.watchFolders,
    server: {
      enhanceMiddleware: assetsResolutionFix.applyMiddleware,
    },
  };

  return wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config));
})();
