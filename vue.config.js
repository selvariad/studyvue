module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        //src目录在脚手架3默认已经是被设定成@了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}