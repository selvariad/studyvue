// 在新版swiper中已经封装好了组件，直接引入使用就可以
//如果需要定制就在swiper标签里面写，具体效果去文档找api调用即可
<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="(item, index) in banners" :key="index" class="banners">
      <a :href="item.link">
        <img :src="item.image" alt="" class="banners" />
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
//对于插件的兼容性问题，安装node-sass:6.x,sass-loader:10.x就能实现运行了
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isload: false,
    };
  },
  methods: {
    imgload() {
      if (!this.isload) {
        this.$emit("imgload");
        this.isload = true;
      }
    },
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.banners {
  width: 100%;
}
</style>