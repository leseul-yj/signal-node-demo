/**
 * Base webpack config used across other specific configs
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const chunks = {
    index: [path.join(__dirname, "./src/index.js")]
};
const nodeExternals = require('webpack-node-externals');
exports.default = {
    entry: chunks,
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[chunkhash].js",
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: "babel-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/theme")],
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.less$/,
                exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/theme")],
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            camelCase: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[folder]__[name]__[local]__[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/octet-stream"
                    }
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".less"],
        modules: [__dirname, "node_modules", path.resolve(__dirname, "./src/js")]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: "聊天",
            filename: "./index.html",
            template: "./src/index.ejs",
            alwaysWriteToDisk: true,
            chunks: ["index"],
            chunksSortMode: "manual",
            inject: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
