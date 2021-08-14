<template>
  <div id="home">
    <navbar class="home-nav">
      <template #center>
        <div class="home-nav-title">购物街</div>
      </template>
    </navbar>
    <div class="banners">
      <homeswiper :banners="banners"></homeswiper>
    </div>
    <homeremview :recommend="recommends" />
    <featureview />
    <tabcontrol
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabclick="tabclick"
    />
    <goodslist :goods="goods[currenttype].list" />
  </div>
</template>
<script>
//将引用的子组件进行分类写开方便管理
import navbar from "../../components/common/navbar/navbar";
import tabcontrol from "../../components/content/tabcontrol/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";

import homeswiper from "./childcomps/homeswiper";
import homeremview from "./childcomps/homerecommendview";
import featureview from "./childcomps/featureview";

import { gethomedata, gethomegoods } from "../../network/home";
export default {
  name: "home",
  components: {
    navbar,
    homeswiper,
    homeremview,
    featureview,
    tabcontrol,
    goodslist,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currenttype: "pop",
    };
  },
  //生命周期函数笔记在学习router的appvue处
  created() {
    //请求多个数据
    this.gethomedata();
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  methods: {
    tabclick(index) {
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
    },
    //将数据请求的具体步骤在methods里进行封装
    gethomedata() {
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
    gethomegoods(type) {
      //默认先将页面写成0，然后调用函数的时候请求多当前页面+1的页面
      //将请求出的页面保存到goods里
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then(
        (res) => {
          //这里push语法的意思是可变的变量数量
          //调用xxxx.push(...aaaa)发生的具体操作是将aaaa数组的元素一个一个取出来
          //然后push到xxxx数组最后一个一个加进去
          this.goods[type].list.push(...res.data.data.list);
          //请求完一页后要将page再+1请求下个页面
          this.goods[type].page += 1;
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>
<style scoped>
.home-nav {
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
}
.home-nav-title {
  color: aliceblue;
}
.banners {
  padding-top: 40px;
}
.tab-control {
  /* 实现拖拽fixed的功能 */
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>