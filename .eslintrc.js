module.exports = {
  // eslint-configs
  extends: ['@onthebyway/eslint-config-typescript'],
  // eslint-plugins
  plugins: ['jsx-a11y', 'react-hooks', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  // enabling/disabling/changing level of rules
  rules: {
    'react/no-unknown-property': [
      'warn',
      {
        ignore: ['css', 'tw'],
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': 'error',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  },
};
