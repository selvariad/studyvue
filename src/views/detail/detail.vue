<template>
  <div>
    <detailnavbar></detailnavbar>
    <detailswiper :itemimg="itemtopimg"></detailswiper>
    <detailbaseinfo :itemdetail="itemdetail" />
    <detailshopinfo :shop="shop" />
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
import detailswiper from "./childcomps/detailswiper";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";

import { getitemdata, itemdetail, shop } from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
  },
  data() {
    return {
      iid: null,
      itemtopimg: [],
      itemdetail: {},
      shop: {},
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
</style>