module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    eqeqeq: 'error',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-console': 'warn',
    'react-native/sort-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react/prop-types': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@apex-rn/**',
            group: 'external',
            position: 'after',
          },
        ],
        distinctGroup: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['react-native'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
      parserOptions: {
        project: ['packages/*/tsconfig.json'],
      },
    },
  ],
};
