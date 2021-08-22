<template>
  <navbar class="nav">
    <template #center>
      <div class="home-nav-title">购物车({{ length }})</div>
    </template>
  </navbar>
</template>

<script>
import navbar from "../../../components/common/navbar/navbar";

import { mapGetters } from "vuex";
export default {
  components: {
    navbar,
  },
  computed: {
    //为了重复利用this.$store.xxx一类的代码，可以放到vuex的getters里去封装
    ...mapGetters({
      length: "cartlength",
    }),
  },
};
</script>

<style scoped>
.nav {
  color: #fff;
  background-color: var(--color-tint);
  font-weight: 600;
}
</style>