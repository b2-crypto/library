module.exports = {
  extends: ['../../.eslintrc.cjs', 'plugin:storybook/recommended'],
  ignorePatterns: ['storybook-static/'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
