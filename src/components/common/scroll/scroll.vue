<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pulldown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
import ObserveDom from "@better-scroll/observe-dom"; //解决滚不动的问题
import ObserveImage from "@better-scroll/observe-image"; //解决数据刷新后content高度与实际不符的问题
BScroll.use(Pulldown);
BScroll.use(Pullup);
BScroll.use(ObserveDom);
BScroll.use(ObserveImage);
export default {
  name: "scroll",
  data() {
    return {
      bs: null,
      props: {
        //从外部传入所需的参数来实现定制插件功能
        probeType: {
          type: Number,
          default: 0,
        },
      },
    };
  },
  methods: {
    //将data中的scroll对象功能直接封装到methods中方便直接传参调用
    scrollto(x, y, time) {
      //指定滚动到什么位置
      //xy是坐标，time是响应时间
      this.bs.scrollTo(x, y, time);
    },
    finishpull() {
      this.bs.finishPullUp();
    },
  },
  mounted() {
    setTimeout(
      () => {
        this.bs = new BScroll(this.$refs.wrapper, {
          pullDownRefresh: true,
          probeType: this.probeType,
          pullUpLoad: true,
          click: true,
          observeDOM: true,
          observeImage: true,
        });
        this.bs.on("pullingDown", () => {
          console.log("下拉刷新");
          //如果遇到莫名其妙的报错，可以在执行函数前面加&&判断
          //例如:this.bs && this.bs.finishPullDown();
          //意思是先判断this.bs是否存在，如果返回undefined或者null
          //则不会继续往this.bs.finishPullDown();执行
          this.bs.finishPullDown();
        });
        this.bs.on("pullingUp", () => {
          // console.log("上拉刷新");
          this.$emit("pullingUp");
          // this.bs.finishPullUp();
        });
        // 传回滚动的位置
        this.bs.on("scroll", (position) => {
          // console.log(-position.y);
          this.$emit("position", position);
        });
      },
      20 //拉动多久触发事件，单位ms
    );
  },
};
</script>
