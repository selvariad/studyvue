<template>
  <div v-if="Object.keys(detailinfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailinfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailinfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailinfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imgload"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      //在原生中有加载事件xxx.onload = funtion(){} 详见webapi笔记
      //在vue中有一个封装好的函数@load 也可以实现原生onload一样的功能
      //给要监听的标签写@load="func"则该标签加载完成后会调用绑定的函数
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  text-align: center;
  margin: 10px 0 15px;
  color: #333;
  font-size: 15px;
  font-weight: 800;
}
.info-list img {
  width: 100%;
}
</style>