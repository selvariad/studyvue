<template>
  <div id="home">
    <navbar class="home-nav">
      <template #center>购物街</template>
    </navbar>
  </div>
</template>
<script>
import navbar from "../../components/common/navbar/navbar";
import Navbar from "../../components/common/navbar/navbar.vue";
export default {
  name: "home",
  components: {
    navbar,
  },
};
Navbar;
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>