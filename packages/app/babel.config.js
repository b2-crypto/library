module.exports = api => {
  const babelEnv = api.env();
  const plugins = [];

  if (babelEnv === 'production' || process.env.CI) {
    plugins.push('transform-remove-console');
  }

  //react-native-reanimated/plugin has to be listed last.
  plugins.push('react-native-reanimated/plugin');
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins,
  };
};
