/*
 * @Description: webpack生产环境配置
 * @Author: AodaZhang
 * @Date: 2020-05-12 12:31:21
 * @LastEditTime: 2020-05-12 18:04:46
 */
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const commonConfig = require('./webpack.common')
const { distPath, jsFileName, cssFileName } = require('./entry')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'none',
  output: {
    publicPath: './',
    filename: `${jsFileName}[name].[contenthash:8].js`,
    path: distPath
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${cssFileName}[name].[contenthash:8].css`,
      chunkFilename: `${cssFileName}[name].[contenthash:8].chunk.css`
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(html|css|js)$/,
      threshold: 0, // gzip压缩大小阈值：>阈值被压缩
      minRatio: 0.8, // gzip压缩比率阈值：<阈值被压缩
      deleteOriginalAssets: false // 不删除原文件
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }
})
