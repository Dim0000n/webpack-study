const path = require('path') //import path module
const HTMLWebpackplugin = require('html-webpack-plugin') //plugin to include bundles in html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //plugin to clean dist directory

module.exports = {          //export object
    context: path.resolve(__dirname, 'src'), //set main directory of project
    mode: 'development', //mode to bundle
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    }, //entry point
    output: {               
        filename: '[name].[contenthash].js',  //output files
        path: path.resolve(__dirname, 'dist') //path to output directory
        //path.resolve - return absolute path from few strings
    },
    plugins: [
        new HTMLWebpackplugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: { 
        rules: [ //set rules
            {  //configure css-loader
                test: /\.css$/, //extensions of styles
                use: ['style-loader', 'css-loader'] //webpack process loaders from right to left
            },
            {   //configure image loader
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}