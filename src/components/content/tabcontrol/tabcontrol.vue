<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index == currentindex }"
      @click="clicktabcontrol(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabcontrol",
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    clicktabcontrol(index) {
      this.currentindex = index;
      //向外传输格式this.$emit('自定义名称',传出的数据)
      this.$emit("tabclick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
