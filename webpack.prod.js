const merge = require("webpack-merge");
const path = require("path");

const base = require("./webpack.base").default;

exports.default = merge(base, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        mimetype: "image/svg+xml",
                        name: "[path][name].[ext]",
                        // publicPath:'http://images.smartbeop.com/static/app/Index/v3/images',
                        //publicPath: "images",
                        //emitFile: false
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                        // publicPath:'http://images.smartbeop.com/static/app/Index/v3/images',
                        // publicPath:"images",
                        //emitFile: false
                    }
                }
            }
        ]
    }
});
