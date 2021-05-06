const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WSAELOOP } = require("constants");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    devServer: {
        contentBase: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    }
}