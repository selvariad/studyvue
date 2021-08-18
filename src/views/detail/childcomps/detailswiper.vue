<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="itemview"
  >
    <swiper-slide v-for="(item, index) in itemimg" :key="index" class="item">
      <img :src="item" alt="" class="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    itemimg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.itemview {
  height: 37vh;
}
.item {
  width: 100%;
}
</style>