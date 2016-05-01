var webpack = require('webpack');

var manifest = {};
try {
  manifest = require('./.build/chunk-manifest.json');
} catch (e) {
  console.log('Failed to read chunk manifest');
}

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'aws-sdk': 'commonjs aws-sdk'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
    __CSS_ASSET__: JSON.stringify(manifest['app.css']),
    __JS_ASSET__: JSON.stringify(manifest['app.js']),
      __DEV__: false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
