const Webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'main': './client/app/main.ts'
    },

    resolve: {

        extensions: ['', '.ts', '.js'],
        root: './',
        modulesDirectories: ['./node_modules'],

    },

    module: {

        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            }
        ],

        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?v=.*)?$/,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: ['./client/index.html']
            }

        ]

    },

    plugins: [


        new Webpack.optimize.CommonsChunkPlugin({
            name: ["vendor","polyfills"]
        }),

        new CopyWebpackPlugin([
            { from: 'client/app/assets', to: 'assets' }
        ]),

        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        }),

        new HtmlWebpackPlugin({
            template: './client/index.html',
            chunksSortMode: 'auto'
        })

    ]

};
