module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react', 'jest'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 1
  }
}