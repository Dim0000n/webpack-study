const path = require('path') //import path module

module.exports = {          //export object
    mode: 'development', //mode to bundle
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    }, //entry point
    output: {               
        filename: '[name].bundle.js',  //output files
        path: path.resolve(__dirname, 'dist') //path to output directory
        //path.resolve - return absolute path from few strings
    }
}