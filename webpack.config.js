const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode:'development',
    entry: {
        bundle:path.resolve(__dirname,'src/index.js'), //syntax for multiple entry points
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash].js', // name taken from entry
        clean:true,
        assetModuleFilename:'[name][ext]'
    },
    devtool:'source-map',
    devServer: {
        static:{
            directory: path.resolve(__dirname,'dist'),
        },
        port:3000,
        hot:true,
        open: true,
        compress:true,
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                type:'asset/resource'
            }
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'Webpack App',
            filename:'index.html',
            template:'src/template.html'
        }),
        new BundleAnalyzerPlugin()
    ]
}