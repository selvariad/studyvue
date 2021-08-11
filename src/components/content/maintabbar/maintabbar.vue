<template>
  <tabbar>
    <tabbaritem path="/home">
      <template #tab-bar-item-icon>
        <img src="../../../assets/img/tabbar/home.svg" alt="" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="../../../assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template #tab-bar-item-text>
        <div>首页</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/category">
      <template #tab-bar-item-icon>
        <img src="../../../assets/img/tabbar/category.svg" alt="" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="../../../assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template #tab-bar-item-text>
        <div>分类</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/cart">
      <template #tab-bar-item-icon>
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template #tab-bar-item-text>
        <div>购物车</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/profile">
      <template #tab-bar-item-icon>
        <img src="../../../assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="../../../assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template #tab-bar-item-text>
        <div>个人设置</div>
      </template>
    </tabbaritem>
  </tabbar>
</template>
<script>
import tabbar from "../../common/tabbar";
import tabbaritem from "../../common/tabbaritem";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1; /* 不管其内容如何，使所有弹性项目的长度均相同 */
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>