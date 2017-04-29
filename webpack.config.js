const webpack = require('webpack');

const config = {
    entry: "./src/Index.js",

    output: {
        filename: "bundle.js",
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
        ]
    }
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin(),
    //    new webpack.DefinePlugin({
    //        'process.env.NODE_ENV': JSON.stringify('production')
    //    })
    //]
};

module.exports = config;