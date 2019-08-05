
const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '../')

module.exports = {
    entry : [
        path.join( parentDir,'main.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ["babel-loader"],
        },    
            
        {
            rules: [{
                test: /\.scss$/,               
                loaders: ["style-loader", "css-loader", "scss-loader"]
            }]
           
        }]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'

    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
