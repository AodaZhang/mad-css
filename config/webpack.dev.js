/*
 * @Description: webpack开发环境配置
 * @Author: AodaZhang
 * @Date: 2020-05-12 12:31:15
 * @LastEditTime: 2020-05-12 16:24:28
 */
const { HotModuleReplacementPlugin } = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { distPath } = require('./entry')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: distPath
  },
  devServer: {
    contentBase: distPath,
    open: false,
    port: 3000,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules: true
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  }
})
