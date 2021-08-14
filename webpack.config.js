const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]

    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};