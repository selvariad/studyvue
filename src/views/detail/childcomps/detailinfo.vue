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
      />
    </div>
  </div>
</template>

<script>
// import { debounce } from "../../../components/utils";
export default {
  data() {
    return {
      end: 0,
      counter: 0,
    };
  },
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    detailinfo() {
      this.end = this.detailinfo.detailImage[0].list.length;
      this.loadend();
    },
  },
  methods: {
    loadend() {
      if (this.end !== this.counter) {
        this.counter++;
        let timer = null;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          this.loadend();
        }, 100);
      } else {
        this.$emit("imgload");
      }
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