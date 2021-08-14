<template>
  <div id="nav">
    <router-view></router-view>
    <maintabbar> </maintabbar>
  </div>
</template>
<script>
import maintabbar from "../src/components/content/maintabbar/maintabbar";
export default {
  name: "App",
  components: {
    maintabbar,
  },
};
</script>
<style>
@import url("./assets/css/base.css");
</style>
