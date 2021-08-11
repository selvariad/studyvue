<template>
  <tabbar>
    <tabbaritem path="/home">
      <slot name="tab-bar-item-icon"
        ><img src="../../../assets/img/tabbar/home.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-icon-active"
        ><img src="../../../assets/img/tabbar/home_active.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-text"><div>首页</div></slot>
    </tabbaritem>
    <tabbaritem path="/category">
      <slot name="tab-bar-item-icon"
        ><img src="../../../assets/img/tabbar/category.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-icon-active"
        ><img src="../../../assets/img/tabbar/category_active.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-text"><div>分类</div></slot>
    </tabbaritem>
    <tabbaritem path="/cart">
      <slot name="tab-bar-item-icon"
        ><img src="../../../assets/img/tabbar/shopcart.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-icon-active"
        ><img src="../../../assets/img/tabbar/shopcart_active.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-text"><div>购物车</div></slot>
    </tabbaritem>
    <tabbaritem path="/profile">
      <slot name="tab-bar-item-icon"
        ><img src="../../../assets/img/tabbar/profile.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-icon-active"
        ><img src="../../../assets/img/tabbar/profile_active.svg" alt=""
      /></slot>
      <slot name="tab-bar-item-text"><div>个人设置</div></slot>
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
</style>