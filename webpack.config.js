const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dirname = __dirname.replace('build','');
module.exports = {
    mode: 'development',
    entry: dirname + '/src/index.js',
    output: {
        filename: 'kityminder.case.js',
        path: path.resolve(dirname, 'dist'),
        publicPath: '/'
    },

    resolve: {
        // 自动补全后缀，注意第一个必须是空字符串,后缀一定以点开头
        extensions: ['.js', '.json', '.scss', '.css'],
        alias: {
            '@': path.resolve(dirname,'src')
        }
    },
    module:{
        rules:[
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",{loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }}],
            },
            {
                test: /\.jsx?$/,
                //exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'),
                                {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                },

            },
        ],
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:dirname + '/public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin()
    ],
};
