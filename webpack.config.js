const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,"public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: "/node-modules/",
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: "./public"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello world"
        })
    ],
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
}