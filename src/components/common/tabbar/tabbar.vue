<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabbar",
};
</script>
<style scoped>
#tab-bar {
  display: flex;
  background-color: rgb(243, 243, 243);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba(233, 233, 233, 0.74);
}
</style>>
