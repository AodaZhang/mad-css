/*
 * @Description: 全局类型定义文件
 * @Author: AodaZhang
 * @Date: 2020-05-12 14:10:56
 * @LastEditTime: 2020-05-12 15:25:21
 */

interface Hot {
  accept: (path: string, callback: () => void) => void
}

interface Module extends NodeModule {
  hot: Hot
}

declare var module: Module
