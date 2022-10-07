const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/app.js',//entry point, should have all the imports
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/build-template.html'
        }),
        new Dotenv()
    ]
}