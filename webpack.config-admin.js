var webpack = require('webpack');
var resolve = require('path').resolve;

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
  // when module not found, find locally first
  // helps fixing the npm link not working with webpack
  // http://stackoverflow.com/a/33722844/147079
  resolve: {
    fallback: [resolve('node_modules')]
  },
  resolveLoader: {
    fallback: [resolve('node_modules')]
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
