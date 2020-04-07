module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          screens: './src/screens',
          theme: './src/theme',
        },
      },
      node: {
        extensions: ['.js', '.native.js'],
      },
    },
  },
}
