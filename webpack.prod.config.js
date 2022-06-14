const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dirname = __dirname.replace('build','')
module.exports = {
    entry: dirname+'/src/index.js',
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
    plugins:[
        new HtmlWebpackPlugin({
            template:dirname + '/public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};
