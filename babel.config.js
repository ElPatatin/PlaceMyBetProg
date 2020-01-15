module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          'types': './types/index.tsx',
          'components': './components/index.tsx',
          'screens':'./screens/index.tsx',
          'templates':'./templates/index.tsx',
          'servicies':'./servicies/index.tsx',
        }
      }
    ],
    'jest-hoist'
  ]
};