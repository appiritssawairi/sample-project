var path = require('path');
var webpack = require('webpack');
 
 
module.exports = {
  mode: 'development',
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
      rules: [
           {
             test: /\.(js|jsx)$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             options: {
               presets: ["@babel/preset-env","@babel/preset-react"],
             }
           },
           {
             test: /\.css$/i,
             use: ["style-loader", "css-loader"],
           },
           {
             test: /\.svg$/i,
             use:[ 
            {
              loader: 'url-loader',
              options:{
                encoding: false,
              }
            }
             ]
           }
        ]
    }
}