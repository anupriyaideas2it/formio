var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const METADATA = {
    //host: 'localhost',
    host: '139.59.38.102',
    port: '3000',
};

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        //publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },


    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        stats: 'minimal'
    }
});
