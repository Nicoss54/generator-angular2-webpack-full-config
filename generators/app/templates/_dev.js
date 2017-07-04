const WebpackMerge = require('webpack-merge'),
    CommonConfig = require('./common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin'),
    LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = WebpackMerge(CommonConfig, {

    output: {
        path: __dirname + './dist',
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
    },

    devServer: {
        port: 8000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    plugins: [

        new LoaderOptionsPlugin({
            debug: true,
            devtool: 'source-map',
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
            }
        }),
        new DefinePlugin({
            "process.env.ENV": JSON.stringify('dev')
        })
    ]
});