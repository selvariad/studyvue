<template>
  <div id="detail">
    <detailnavbar></detailnavbar>
    <scroll class="wrapper" ref="scroll" :probe-type="3">
      <detailswiper :itemimg="itemtopimg"></detailswiper>
      <detailbaseinfo :itemdetail="itemdetail" />
      <detailshopinfo :shop="shop" />
      <detailinfo :detailinfo="detailinfo" />
      <detailparaminfo :paraminfo="paraminfo" />
    </scroll>
  </div>
</template>

<script>
import scroll from "../../components/common/scroll/scroll";

import detailnavbar from "./childcomps/detailnavbar";
import detailswiper from "./childcomps/detailswiper";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";
import detailinfo from "./childcomps/detailinfo";
import detailparaminfo from "./childcomps/detailparaminfo";

import {
  getitemdata,
  itemdetail,
  shop,
  goodsparam,
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
  },
  data() {
    return {
      iid: null,
      itemtopimg: [],
      itemdetail: {},
      shop: {},
      detailinfo: {},
      paraminfo: {},
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
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
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
  height: 100vh;
  overflow: hidden;
}
</style>