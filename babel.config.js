module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // module resolver for easy imports
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@navigations': './src/navigations',
          '@assets': './src/assets'
        },
      },
    ],

    // dotenv configuration for environment variables
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: `.env.${process.env.NODE_ENV}`,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
