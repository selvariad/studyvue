<template>
  <scroll class="scroll">
    <div class="cart-list">
      <cartlistitem
        v-for="(item, index) in list"
        :key="index"
        :iteminfo="item"
      />
    </div>
  </scroll>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll";

import cartlistitem from "./cartlistitem";

import { mapGetters } from "vuex";

export default {
  components: {
    scroll,
    cartlistitem,
  },
  computed: {
    ...mapGetters({
      list: "cartlist",
    }),
  },
};
</script>

<style scoped>
.scroll {
  height: 94vh;
  overflow: hidden;
}
</style>