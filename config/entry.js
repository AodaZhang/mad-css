/*
 * @Description: webpack配置工具
 * @Author: AodaZhang
 * @Date: 2020-05-12 16:01:19
 * @LastEditTime: 2020-05-12 18:00:00
 */
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryFileName = 'index' // 默认入口ts、html文件名
const srcPath = path.resolve(__dirname, '../src') // 打包入口路径
const distPath = path.resolve(__dirname, '../dist') // 打包输出路径
const jsFileName = 'js/' // js文件打包输出目录
const cssFileName = 'css/' // css文件打包输出目录
const imageFileName = 'image/' // 图片文件打包输出目录
const fontFileName = 'font/' // font文件打包输出目录

/**
 * @description: 多页应用入口文件处理函数
 * @return {Array} entry和HtmlWebpackPlugin处理结果
 */
const filePathProcess = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  // 1.获取符合命名规则的入口文件路径数组
  const entryTs = glob.sync(`${srcPath}/*/${entryFileName}.ts`)
  entryTs.forEach(entryPath => {
    // 2.获取入口文件的上层路径
    const dirname = path.dirname(entryPath)
    // 3.获取入口文件上一层文件夹的名称作为入口key
    const dirArr = dirname.split('/')
    const entryKey = dirArr[dirArr.length - 1]
    if (!entryKey) return
    // 4.入口配置
    entry[entryKey] = entryPath
    // 5.获取html模版路径
    const templatePath = `${dirname}/${entryFileName}.html`
    // 6.Html模版插件配置
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
      template: templatePath,
      filename: `${entryKey}.html`,
      chunks: [`${entryKey}`]
    }))
  })
  return [entry, htmlWebpackPlugins]
}

// 执行多页处理函数，返回多页entry和HtmlWebpackPlugin
const entryArray = filePathProcess()

module.exports = {
  entry: entryArray[0],
  htmlWebpackPlugins: entryArray[1],
  distPath,
  jsFileName,
  cssFileName,
  imageFileName,
  fontFileName
}