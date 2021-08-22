import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";
export default {
  addcart(context, payload) {
    // let oldinfo = null
    // for (let i of state.cartlist) {
    //   if (i.iid === payload.iid) {
    //     oldinfo = i
    //   }
    // }
    // 也可以用数组的find方法
    // find() 方法返回通过测试函数的第一个数组元素的值
    //为了方便
    let oldinfo = context.state.cartlist.find(i => i.iid === payload.iid)
    if (oldinfo) {
      // oldinfo.count += 1
      context.commit(ADD_COUNTER, oldinfo)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  }
}