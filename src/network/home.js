import { request } from "./request";
//将home的请求封装到一个文件里，方便管理，因为一个页面会有多个请求
//不要把请求混在vue文件里，会很乱
export function gethomedata() {
  return request({
    url: '/home/multidata',
  })
}
//请求goods的数据，因为涉及多个参数拼接，详见axios main.js里面写的笔记
//所以要将params分开来方便管理，
export function gethomegoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}