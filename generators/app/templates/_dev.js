const WebpackMerge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CommonConfig = require('./common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = WebpackMerge(CommonConfig, {

    debug: true,
    devtool: 'source-map',

    output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
    },

    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },

    devServer: {
        port: 8000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: './dist'
    },

    plugins: [
        new DefinePlugin({
            "process.env.ENV": JSON.stringify('dev')
        })
    ]

});
