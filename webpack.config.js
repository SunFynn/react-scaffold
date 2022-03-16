const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                // 多个 loader 的时候执行顺序和排列顺序相反
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.less$/i,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 使用自定义模板来生成 HTML 文件
            template: './src/index.html'
        })
    ]
}
module.exports = config;