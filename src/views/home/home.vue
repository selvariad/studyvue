<template>
  <div id="home">
    <navbar class="home-nav">
      <template #center>购物街</template>
    </navbar>
    <homeswiper :banners="banners"></homeswiper>
  </div>
</template>
<script>
import navbar from "../../components/common/navbar/navbar";
import homeswiper from "../home/childcomps/homeswiper";
import { gethomedata } from "../../network/home";
export default {
  name: "home",
  components: {
    navbar,
    homeswiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  //生命周期函数笔记在学习router的appvue处
  created() {
    //请求多个数据
    gethomedata().then(
      (res) => {
        //将接收到的数据保存到data中，否则funtion执行完毕之后数据会被回收
        //具体路径log一下接受的对象具体数据就可以
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>