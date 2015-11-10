module.exports = {
  entry: './indexAdmin.js',
  output: {
    path: './dist/',
    filename: 'algoliaAdminBundle.js',
    library: 'algoliaAdminBundle',
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
  },
  module: {
    loaders: [{
      test: /\.js$/, include: /instantsearch\.js/, loader: 'babel'
    }]
  }
};
