module.exports = {
  entry: './index.js',
  output: {
    path: './dist/',
    filename: 'algoliaBundle.js',
    library: 'algoliaBundle',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      // force local resolve when npm link is used, otherwise BOOM!
      // it's a webpack issue with npm link, maybe solved at some point..
      // https://github.com/webpack/webpack/issues/554
      // https://github.com/webpack/webpack/issues/784
      jquery: require('path').join(__dirname, 'node_modules', 'jquery')
    }
  }
};
