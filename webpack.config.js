const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WSAELOOP } = require("constants");
const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"] //goes from the "end"
            }
        ]
    }
}