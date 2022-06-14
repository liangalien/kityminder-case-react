const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dirname = __dirname.replace('build','')
module.exports = {
    entry: dirname + '/src/index.js',
    output: {
        filename: 'kityminder.case.js',
        path: path.resolve(dirname, 'dist'),
        clean:true
    },
    resolve:{
        alias: {
            '@': path.join(dirname,'src')
        },
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
                use: [MiniCssExtractPlugin.loader, "css-loader","less-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
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
            template:dirname+'/public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: "8080",
        host: "localhost",
        proxy: {
            "/api": {
                target: 'https://www.6pian.cn',
                changeOrigin: true,
                secure: true, // 如果是https接口，需要配置这个参数
                pathRewrite:{
                    '^/api':''
                },
                headers: {
                    'kan-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodW9kZSIsInN1YiI6IjE1MTkyMDAyODI3IiwiYXVkIjoiMzQwODI1IiwiaWF0IjoxNjQxODA3MjgzLCJzaWduIjoiYWNiNGZjOWNjMDM4NmJiMzBkNDEzNGE1Zjc3MmFiNzYiLCJleHAiOjE2NzMzNDMyODN9.JCxac0kWmr-31XkSoan8jxGh6pZKXH2wyXULNZuEkfg'
                }
            }
        },
    },

};
