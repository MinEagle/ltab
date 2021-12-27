<template>
<!--  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination='{-->
<!--  "clickable": true-->
<!--}' :navigation="true"-->
<!--          :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true"-->
<!--          class="mySwiper tw-bg-red-200 tw-h-48">-->
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :mousewheel="true" :pagination='{
  "clickable": true
}' :navigation="true"  class="mySwiper">

    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/navigation"
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {}

}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
