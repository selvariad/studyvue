<template>
  <div>
    {{ iteminfo }}
  </div>
</template>

<script>
export default {
  props: {
    iteminfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
</style>