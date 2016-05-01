var path = require('path');
var Extract = require('extract-text-webpack-plugin');
var Manifest = require('webpack-manifest-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    app:[
      'babel-polyfill',
      './app/main.js'
    ]
  },
  output: {
    path: path.join(process.cwd(), '.build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new Extract('[name].[chunkhash].css'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new Manifest({
      fileName: 'chunk-manifest.json'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        'warnings': false,
        'drop_debugger': true,
        'drop_console': true,
        'pure_funcs': ['console.log']
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loader: Extract.extract('style-loader', 'raw-loader!sass-loader')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, 'node_modules/breakpoint-sass/stylesheets'),
      path.join(__dirname, 'node_modules/bourbon/app/assets/stylesheets')
    ]
  }
};
