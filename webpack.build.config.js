var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var cwd = process.cwd();

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(cwd, 'assets/'),
        filename: "bundle.js",
        publicPath: "assets/"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
              test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
              exclude: /node_modules/,
              loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [cwd, 'node_modules']
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
         }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
