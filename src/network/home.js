import { request } from "./request";
//将home的请求封装到一个文件里，方便管理，因为一个页面会有多个请求
//不要把请求混在vue文件里，会很乱
export function gethomedata() {
  return request({
    url: '/home/multidata',
  })
}