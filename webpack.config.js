/**
 * Created by dbuarque on 2/24/16.
 */
const webpack = require('webpack');

var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    resolve: {
        extensions: [ '', '.js', '.json' ]
    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
};