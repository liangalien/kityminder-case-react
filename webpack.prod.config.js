const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const dirname = __dirname.replace('build','');
module.exports = {
    mode: 'production',
    entry: dirname + '/src/index.js',
    output: {
        filename: 'kityminder.case.js',
        path: path.resolve(dirname, 'dist'),
        clean:true,
        publicPath: './'
    },
    resolve: {
        // 自动补全后缀，注意第一个必须是空字符串,后缀一定以点开头
        extensions: ['.js', '.json', '.scss', '.css'],
        alias: {
            '@': path.resolve(dirname,'src'),
            '@antd': 'antd'
        }
    },
    module:{
        rules:[
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        //outputPath: path.resolve(dirname, 'dist') + '/images/', // 图片输出的路径
                        name: '[name].[ext]'
                    }
                }
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
            template:dirname+'/public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin(),
        new UglifyJsPlugin(),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                map: {
                    // 不生成内联映射,这样配置就会生成一个source-map文件
                    inline: false,
                    // 向css文件添加source-map路径注释
                    // 如果没有此项压缩后的css会去除source-map路径注释
                    annotation: true
                }
            }
        })
    ]
};
