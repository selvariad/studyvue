<template>
  <div>
    <detailnavbar></detailnavbar>
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
export default {
  name: "detail",
  components: {
    detailnavbar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.itemid;
  },
};
</script>

<style scoped>
</style>