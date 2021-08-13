<template>
  <Swiper>
    <Swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" class="banners" />
      </a>
    </Swiper-item>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "homeswiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
.banners {
  width: 100%;
}
</style>