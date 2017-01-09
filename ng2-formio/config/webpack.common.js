var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

const METADATA = {
  title: 'Angular2 ng2formio',
  baseUrl: '/',
};


module.exports = {
  entry: {
    'polyfills': './example/polyfills.ts',
    'vendor': './example/vendor.ts',
    'main': './example/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css'
      },
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'example/index.html',
      title: METADATA.title,
      metadata: METADATA,
    }),

    new webpack.ProvidePlugin({
      'jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
