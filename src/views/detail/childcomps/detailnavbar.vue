<template>
  <div>
    <navbar>
      <template #left>
        <div class="back" @click="backclick">
          <img src="../../../assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template #center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            :class="{ isactive: index == currentindex }"
            @click="titleclick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/navbar/navbar";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titleclick(index) {
      this.currentindex = index;
      this.$emit("titleclick", index);
    },
    backclick() {
      this.$router.back();
      // this.$router.go(-1) 也可以
    },
  },
};
</script>

<style scoped>
.back {
  position: relative;
}
.back img {
  position: absolute;
  top: 14px;
  width: 15px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 15px;
}
.isactive {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>