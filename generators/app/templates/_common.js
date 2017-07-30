const Webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin'),
    path = require('path');

module.exports = {

    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'main': './client/app/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        //root: './',
        modules: [
            path.join(__dirname, './'),
            './node_modules'
        ],
    },

    module: {

        rules: [

            {
                test: /\.js$/,
                enforce: 'pre',
                use: 'source-map-loader',
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                use: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?v=.*)?$/,
                use: "file-loader"
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: ['./client/index.html']
            }

        ]

    },

    plugins: [


        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            __dirname + './client', {}
        ),


        new Webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "polyfills"]
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