<template>
  <div id="detail">
    <detailnavbar @titleclick="titleclick" />
    <scroll class="wrapper" ref="scroll" :probe-type="3">
      <detailswiper :itemimg="itemtopimg"></detailswiper>
      <detailbaseinfo :itemdetail="itemdetail" />
      <detailshopinfo :shop="shop" />
      <detailinfo :detailinfo="detailinfo" @imgload="imgload" />
      <detailparaminfo ref="param" :paraminfo="paraminfo" />
      <detailusercomment ref="comment" :comment="comment" />
      <goodslist ref="recommend" :goods="recommend" />
    </scroll>
  </div>
</template>

<script>
import scroll from "../../components/common/scroll/scroll";
import goodslist from "../../components/content/goods/goodslist";

import detailnavbar from "./childcomps/detailnavbar";
import detailswiper from "./childcomps/detailswiper";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";
import detailinfo from "./childcomps/detailinfo";
import detailparaminfo from "./childcomps/detailparaminfo";
import detailusercomment from "./childcomps/detailusercomment";

import {
  getitemdata,
  itemdetail,
  shop,
  goodsparam,
  getrecommend,
} from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    scroll,
    detailinfo,
    detailparaminfo,
    detailusercomment,
    goodslist,
  },
  data() {
    return {
      iid: null,
      itemtopimg: [],
      itemdetail: {},
      shop: {},
      detailinfo: {},
      paraminfo: {},
      comment: {},
      recommend: [],
      topy: [0],
    };
  },
  created() {
    this.iid = this.$route.params.itemid;
    getitemdata(this.iid).then(
      (res) => {
        //获取轮播图图片
        this.itemtopimg = res.data.result.itemInfo.topImages;
        //用创建出来的类对象构造函数商品基本信息获取
        this.itemdetail = new itemdetail(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        //获取商家店铺信息
        this.shop = new shop(res.data.result.shopInfo);
        //获取商品的详细数据
        this.detailinfo = res.data.result.detailInfo;
        //获取商品的参数
        this.paraminfo = new goodsparam(
          res.data.result.itemParams.info,
          res.data.result.itemParams.rule
        );
        //获取用户商品评价信息
        this.comment = res.data.result.rate;
        // console.log(res);
        // this.$nextTick(() => {
        //   // $nextTick是指在DOM渲染完之后会调用
        //   // better-scroll的计时器也可以换成这个
        //   // 但是在这里使用的话图片是不一定加载完全了的，只是数据有传送
        //   this.topy.push(-this.$refs.param.$el.offsetTop);
        //   this.topy.push(-this.$refs.comment.$el.offsetTop);
        //   this.topy.push(-this.$refs.recommend.$el.offsetTop);
        // });
      },
      (err) => {
        console.log(err);
      }
    );
    //请求推荐数据
    getrecommend().then(
      (res) => {
        this.recommend = res.data.data.list;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  methods: {
    titleclick(index) {
      console.log(index);
      this.$refs.scroll.scrollto(0, this.topy[index], 400);
    },
    imgload() {
      this.topy.push(-this.$refs.param.$el.offsetTop);
      this.topy.push(-this.$refs.comment.$el.offsetTop);
      this.topy.push(-this.$refs.recommend.$el.offsetTop);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  /* 为了完全盖掉主页的navbar所以zindex拉高 */
  z-index: 9999;
  background-color: #fff;
}
.wrapper {
  height: 95vh;
  overflow: hidden;
}
</style>