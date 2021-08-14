<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recomitem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "homerecommendview",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recomitem {
  flex: 1;
}
.recomitem img {
  width: 70px;
  margin-bottom: 10px;
}
</style>