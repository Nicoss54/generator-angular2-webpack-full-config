const WebpackMerge = require('webpack-merge'),
    CommonConfig = require('./common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    CompressionPlugin = require('compression-webpack-plugin'),
    Path = require ('path');
LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = WebpackMerge(CommonConfig, {

    output: {
        path: Path.join(__dirname, '../dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js',
    },

    plugins: [

        new LoaderOptionsPlugin({
            debug: false,
            devtool: 'source-map',
            minimize: true,
            htmlLoader: {
                removeAttributeQuotes: false,
                caseSensitive: true,
                customAttrSurround: [
                    [/#/, /(?:)/],
                    [/\*/, /(?:)/],
                    [/\[?\(?/, /(?:)/]
                ],
                customAttrAssign: [/\)?\]?=/]
            }
        }),
        new WebpackMd5Hash(),

        new DefinePlugin({
            'process.env.ENV': JSON.stringify('prod')
        }),

        new CompressionPlugin({
            regExp: /\.css$|\.html$|\.js$|\.map$/,
            threshold: 2 * 1024
        })
    ]

});