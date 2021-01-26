const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: {
    'float-number-calc': './src/index.js',
    'float-number-calc.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'FloatNumberCalc',
    libraryTarget: 'umd', // 这将在所有模块定义下公开您的库，允许它与CommonJS、AMD和全局变量一起工作
    libraryExport: 'default'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}
