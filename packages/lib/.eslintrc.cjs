module.exports = {
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['node_modules/', 'dist/'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
