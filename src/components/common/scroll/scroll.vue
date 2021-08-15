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
import ObserveDom from "@better-scroll/observe-dom";
BScroll.use(ObserveDom);
BScroll.use(Pulldown);
BScroll.use(Pullup);
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
      //滚动到什么位置
      //xy是坐标，time是响应时间
      this.bs.scrollTo(x, y, time);
    },
    finishpull() {
      this.bs.finishPullUp();
    },
  },
  mounted() {
    setTimeout(() => {
      this.bs = new BScroll(
        this.$refs.wrapper,
        {
          pullDownRefresh: true,
          probeType: this.probeType,
          pullUpLoad: true,
          click: true,
          observeDOM: true,
        },
        20 //拉动多久触发事件，单位ms
      );
      this.bs.on("pullingDown", () => {
        console.log("下拉刷新");
        this.bs.finishPullDown();
      });
      this.bs.on("pullingUp", () => {
        // console.log("上拉刷新");
        this.$emit("pullingUp");
        // this.bs.finishPullUp();
      });
      // 传回滚动的位置
      this.bs.on("scroll", (position) => {
        // console.log(position);
        this.$emit("position", position);
      });
    });
  },
};
</script>
<style scoped>
</style>