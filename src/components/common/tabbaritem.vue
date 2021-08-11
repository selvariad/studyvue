<template>
  <div class="tab-bar-item" @click="clickitem">
    <!-- 因为插槽会被slot调用插槽的内容替换掉，所以slot可能会丢掉一些功能(样式，if判断等)的，
    为解决这个问题，将slot用div包起来，将div赋予style -->
    <div v-if="isactive"><slot name="tab-bar-item-icon"></slot></div>
    <div v-else><slot name="tab-bar-item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    //在这里写属性可以在调用tabbaritem标签里面自定义修改active的颜色，如activeColor="pink"
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isactive() {
      //判断活跃路由的path与this.path是否一致，一致的话则返回0，不一致则返回-1
      //如果没有元素返回-1 所以判断返回值大于-1为true就是在里面 返回值为false就是不在里面
      return this.$route.path.indexOf(this.path);
      // return console.log(this.$route.path.indexOf(this.path));
      // return console.log(this.path);
    },
    activeStyle() {
      //判断是否活跃来套用相应样式
      return this.isactive ? {} : { color: this.activeColor };
    },
  },
  methods: {
    clickitem() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
</style>
