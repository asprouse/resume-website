var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr',
      'babel-polyfill',
      './app/main.js'
    ],
    vendor: [ // This vendor module is solely to speed up incremental builds
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
      'redux-promise-middleware',
      'history'
    ]
  },
  output: {
    path: path.join(process.cwd(), '.build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://127.0.0.1:3000/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      filename: 'vendor.js',
      minChunks: 2
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
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
        loader: 'style-loader!raw-loader!sass-loader'
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
