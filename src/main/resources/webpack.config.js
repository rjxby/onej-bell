var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: './static',
        filename: 'main.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        root: './ts',
        modulesDirectories: ['node_modules', 'ts']
    },
    module: {
        loaders: [
            {   test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {   test: /\.sass$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!sass?sourceMap&indentedSyntax'
                )
            },
            {   test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}
