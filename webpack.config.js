const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        'float-number-calc': './src/index.js',
        'float-number-calc.min': './src/index.js'
    },
    output: {
        filename: "[name].js",
        library: "FloatNumberCalc",
        libraryTarget: 'umd', // 这将在所有模块定义下公开您的库，允许它与CommonJS、AMD和全局变量一起工作
        libraryExport: 'default'
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}