const path = require('path') //import path module

module.exports = {          //export object
    mode: 'development', //mode to bundle
    entry: './src/index.js', //entry point
    output: {               
        filename: 'bundle.js',  //output file
        path: path.resolve(__dirname, 'dist') //path to output directory
        //path.resolve - return absolute path from few strings
    }
}