import { request } from "./request";
export function getitemdata(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
//es6可以直接创建一个类对象，然后用构造函数创建结构，这样可以按照你想要的结构保存属性
// export class obj{constructor(){}}
export class itemdetail {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newprice = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realprice = itemInfo.lowNowPrice
  }
}
export class shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.count = shopInfo.cGoods
  }
}