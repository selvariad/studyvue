<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/category.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/shopcart.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/profile.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">个人设置</div>
    </tabbaritem>
  </tabbar>
</template>
<script>
import tabbar from "components/common/tabbar";
import tabbaritem from "components/common/tabbaritem";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>
<style scoped>
</style>