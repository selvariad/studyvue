<template>
  <div id="home">
    <navbar class="home-nav">
      <template #center>
        <div class="home-nav-title">购物街</div>
      </template>
    </navbar>
    <tabcontrol
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      ref="tabcontrol1"
      @tabclick="tabclick"
      v-show="tabcontrolshow"
    />
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @position="getpageposition"
      @pullingUp="loaditem"
    >
      <div class="banners">
        <homeswiper :banners="banners"></homeswiper>
      </div>
      <homeremview :recommend="recommends" />
      <featureview />
      <tabcontrol
        :titles="['流行', '新款', '精选']"
        ref="tabcontrol2"
        @tabclick="tabclick"
        v-show="!tabcontrolshow"
      />
      <goodslist :goods="goods[currenttype].list" />
    </scroll>
    <!-- 在vue3中可以直接@监听组件的原生事件，但是在vue3以下则需要在@事件.native
    才能实现监听组件的原生事件 -->
    <backtop @click="backclick" v-show="isshowbacktop" />
  </div>
</template>
<script>
//将引用的子组件进行分类写开方便管理
import navbar from "../../components/common/navbar/navbar";
import scroll from "../../components/common/scroll/scroll";
import tabcontrol from "../../components/content/tabcontrol/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";
import backtop from "../../components/content/backtop/backtop";

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
    scroll,
    backtop,
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
      currentindex: 0,
      isshowbacktop: false,
      tabcontrolshow: false,
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
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
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
          //告诉scroll组件滚动完成，才能再次刷新
          this.$refs.scroll.finishpull();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    backclick() {
      //利用$refs来获取组件中的内容进行操作
      //这里就是调用了scroll组件中的scrollto函数
      this.$refs.scroll.scrollto(0, 0, 400);
    },
    getpageposition(i) {
      this.isshowbacktop = -i.y > 1300;
      //因为用了BS这个插件，所以原本做的原生吸顶没用了
      //解决办法是将tabcontrol复制一份到BS外，利用v-show将在BS里的tab跟外的tab互斥显示
      //但是这里的高度应该要用this.$refs.tabcontrol.$el.offsetTop来获取才对
      //不然不同的设备在执行的时候会出现问题
      this.tabcontrolshow = -i.y > 610;
    },
    loaditem() {
      this.gethomegoods(this.currenttype);
    },
    // imgload() {
    //原本是将swiper中的img监听@load=“imgload”然后emit出来在这里触发
    //但是目前有bug不会触发(因为banner图片最大，一般都是载入最慢的)
    //但是出于性能考虑，可以讲emit做节流阀
    //所有的组件都有一个属性$el用于获取组件中的元素
    //（具体的各种属性可以直接log this.$refs.tabcontrol看）
    //element.offsetTop	返回元素的垂直偏移位置
    //   console.log(this.$refs.tabcontrol.$el.offsetTop);
    // },
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.home-nav {
  /* z-index: 999;
  position: fixed;
  left: 0;
  right: 0; */
  background-color: var(--color-tint);
}
.home-nav-title {
  color: aliceblue;
}
.wrapper {
  height: 93.6vh;
  overflow: hidden;
}
</style>