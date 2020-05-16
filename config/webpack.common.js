/*
 * @Description: webpack基础配置
 * @Author: AodaZhang
 * @Date: 2020-05-12 12:31:07
 * @LastEditTime: 2020-05-15 14:10:37
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { entry, htmlWebpackPlugins, distPath, imageFolderName, fontFolderName } = require('./entry')

module.exports = {
  performance: false,
  entry,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        distPath
      ]
    }),
    ...htmlWebpackPlugins
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: `${imageFolderName}/`,
            limit: 1024 * 20
          }
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: `${fontFolderName}/`,
          }
        }
      }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          priority: 1,
          minSize: 0,
          minChunks: 1
        },
        common: {
          name: 'common',
          priority: 0,
          minSize: 0,
          minChunks: 2
        }
      }
    }
  }
}
