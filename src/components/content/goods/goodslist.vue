<template>
  <div class="goods">
    <goodslistitem
      v-for="(item, index) in goods"
      :key="index"
      :goodsitem="item"
    />
  </div>
</template>
<script>
import goodslistitem from "./goodslistitem";
export default {
  components: {
    goodslistitem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>