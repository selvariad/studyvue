<template>
  <div id="detail">
    <detailnavbar ref="navbar" @titleclick="titleclick" />
    <scroll class="wrapper" ref="scroll" :probe-type="3" @position="position">
      <detailswiper :itemimg="itemtopimg"></detailswiper>
      <detailbaseinfo :itemdetail="itemdetail" />
      <detailshopinfo :shop="shop" />
      <detailinfo :detailinfo="detailinfo" @imgload="imgload" />
      <detailparaminfo ref="param" :paraminfo="paraminfo" />
      <detailusercomment ref="comment" :comment="comment" />
      <goodslist ref="recommend" :goods="recommend" />
    </scroll>
    <detailbottombar @addcart="addcart" />
    <backtop @click="backclick" v-show="isshowbacktop" />
  </div>
</template>

<script>
import scroll from "../../components/common/scroll/scroll";
import goodslist from "../../components/content/goods/goodslist";
import backtop from "../../components/content/backtop/backtop";

import detailnavbar from "./childcomps/detailnavbar";
import detailswiper from "./childcomps/detailswiper";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";
import detailinfo from "./childcomps/detailinfo";
import detailparaminfo from "./childcomps/detailparaminfo";
import detailusercomment from "./childcomps/detailusercomment";
import detailbottombar from "./childcomps/detailbottombar";

import { debounce } from "../../components/utils";
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
    detailbottombar,
    backtop,
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
      getrealy: null,
      currentindex: 0,
      isshowbacktop: false,
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
    this.getrealy = debounce(() => {
      // 因为会有多张图片加载，所以每加载一次就会发射一次自定义事件
      //所以这里调用防抖函数来获取最后一次请求
      this.topy = [0];
      this.topy.push(-this.$refs.param.$el.offsetTop);
      this.topy.push(-this.$refs.comment.$el.offsetTop);
      this.topy.push(-this.$refs.recommend.$el.offsetTop);
      this.topy.push(-Number.MAX_VALUE);
    }, 100);
  },
  methods: {
    titleclick(index) {
      // console.log(index);
      this.currentindex = index;
      this.$refs.scroll.scrollto(0, this.topy[index], 400);
    },
    imgload() {
      this.getrealy();
    },
    position(p) {
      //导航栏随着滚动联动思路：
      //将y轴长度通过自定义事件发送到父组件，然后父组件调用函数来筛选正确的i
      //每次滚动都会传回一个y，然后函数通过for+if的方式来判断出当前y所处哪个组件高度的区间
      //这里加上this.currentindex !== i的作用是为了防止多次发送，只有当i的数值变化
      //才会继续执行函数
      //因为topy数组只有四个数字，所以当滚动到最后一个组件的时候后半句判断会有问题
      //因为topy没有第五个数字故this.topy[i + 1]不存在
      //所以要加一个新的判断条件，并且只判断是否大于这个高度
      //&& 表达式：条件一 && 条件二 ，说明：仅仅两个条件同时为真，结果为真。
      //|| 表达式： 条件一 || 条件二， 说明：只要两个条件有一个为真，结果为真。
      //但是其实这里可以用内存换性能，直接给topy后面再加一个无穷大的数，这样就可以不需要
      //后面那个判断了，但是要注意遍历的len要改，因为强行给后面加了一位数，最后一位没必要判断的
      const positiony = -p.y;
      let len = this.topy.length;
      for (let i = 0; i < len - 1; i++) {
        if (
          // this.currentindex !== i &&
          // ((i < len - 1 &&
          //   positiony >= -this.topy[i] &&
          //   positiony < -this.topy[i + 1]) ||
          //   (i === len - 1 && positiony >= -this.topy[i]))
          this.currentindex !== i &&
          positiony >= -this.topy[i] &&
          positiony < -this.topy[i + 1]
        ) {
          this.currentindex = i;
          this.$refs.navbar.currentindex = this.currentindex;
        }
      }
      //backtop的判断
      this.isshowbacktop = -p.y > 1300;
    },
    backclick() {
      this.$refs.scroll.scrollto(0, 0, 400);
    },
    addcart() {
      //获取需要在购物车展示的信息
      const info = {};
      info.img = this.itemtopimg[0];
      info.title = this.itemdetail.title;
      info.desc = this.detailinfo.desc;
      info.price = this.itemdetail.realprice;
      info.iid = this.iid;
      //将商品添加到购物车
      //因为涉及到商品的信息判断跟处理，所以不commit到mutations
      //有多步操作就dispatch到actions
      this.$store.dispatch("addcart", info);
    },
  },
  unmounted() {
    this.currentindex = 0;
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
  height: 87vh;
  overflow: hidden;
}
</style>