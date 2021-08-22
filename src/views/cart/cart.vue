<template>
  <div class="cart">
    <cartnavbar />
    <cartlist />
  </div>
</template>
<script>
import cartnavbar from "./childcomps/cartnavbar";
import cartlist from "./childcomps/cartlist";

export default {
  name: "cart",
  components: {
    cartnavbar,
    cartlist,
  },
};
</script>
<style scoped>
.cart {
  height: 100vh;
}
</style>
