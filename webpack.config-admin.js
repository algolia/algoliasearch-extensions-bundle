var webpack = require('webpack');

module.exports = {
  entry: './indexAdmin.js',
  output: {
    path: './dist/',
    filename: 'algoliaAdminBundle.js',
    library: 'algoliaAdminBundle',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      // force local resolve when npm link is used, otherwise BOOM!
      // it's a webpack issue with npm link, maybe solved at some point..
      // https://github.com/webpack/webpack/issues/554
      // https://github.com/webpack/webpack/issues/784
      jquery: require('path').join(__dirname, 'node_modules', 'jquery')
    }
  },
  // use the ES6 version of instantsearch.js to avoid code duplication
  module: {
    loaders: [{
      test: /\.js$/, include: /instantsearch\.js/, loader: 'babel'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
