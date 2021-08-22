//防抖函数，用于多次使用funtion的时候制造调用间隔优化性能
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    //...args的形式是为了自动适应参数个数
    clearTimeout(timer)
    // 如果之前有调用计时器，清除老的计时器
    timer = setTimeout(() => {
      // 建立新的计时器，待倒计时完成后执行func
      //短时间发生大量请求的话，就会不断地取消老的计时器生产新的计时器
      //从而减少func的执行次数达到优化的目的
      func(...args)
    }, delay)
  }
}