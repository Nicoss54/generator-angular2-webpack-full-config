const WebpackMerge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CommonConfig = require('./common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    DedupePlugin = require('webpack/lib/optimize/DedupePlugin'),
    UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
    CompressionPlugin = require('compression-webpack-plugin');

module.exports = WebpackMerge(CommonConfig, {

    debug: false,
    devtool: 'source-map',

    output: {
        path: './dist',
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js',
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

    plugins: [
        new WebpackMd5Hash(),

        new DedupePlugin(),

        new DefinePlugin({
            'process.env.ENV': JSON.stringify('prod')
        }),

        new UglifyJsPlugin({
            beautify: false,
            mangle: false, // mangle will cause runtime errors with this app...
            compress: {
                screw_ie8: true
            },
            comments: false
        }),

        new CompressionPlugin({
            regExp: /\.css$|\.html$|\.js$|\.map$/,
            threshold: 2 * 1024
        })
    ]

});
