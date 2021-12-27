<template>
  <swiper
      :modules="[Virtual]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :mousewheel="true"
      :navigation="true"
      :pagination='true'
      :keyboard="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :simulateTouch="false"
      :observer="true"
      :observeParents="true"
      :sensitivity="0.5"
      class="tw-h-full tw-w-full tw-bg-hero-pattern tw-bg-no-repeat tw-bg-cover"
      :style="{'--icon-size':count+'px'}"
      ref="controlledSwiper"
  >

    <swiper-slide v-for="(item,index) in list" :key="index" :virtualIndex="index">
      <draggable
          :list="item"
          :sort="true"
          delay="200"
          animation="300"
          item-key="id"
          class="app-grid tw-mx-20"
          chosenClass="chosen"
          :forceFallback="false"
          @change="handleRemove"
          @start="start"
          @end="end"
          @move="move"
          @dragleave="dragleave($event)"
      >
        <template #item="{ element }">
          <div
              class=" is-mini tw-rounded-lg "
              :class="[element.id===9?'tw-col-span-2 tw-row-span-2 is-small':'',element.id===2?'tw-col-span-4 tw-row-span-2 is-medium ':'']">
            <div>
              <n-icon :size="element.id===9?60*2:element.id===2?60*2:60" :color="element.color">
                <game-controller/>
              </n-icon>
              <div>{{ element.label }}</div>
            </div>
          </div>
        </template>
      </draggable>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {Virtual} from 'swiper';
import {Swiper, SwiperSlide,} from 'swiper/vue';
import {GameController} from '@vicons/ionicons5'

import draggable from 'vuedraggable'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import {onMounted, reactive, ref} from "vue";
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
const controlledSwiper = ref(null);

const list = reactive([])
const count = ref(60)
const drag = false
const colors = [
  '#e54d42',
  '#f37b1d',
  '#fbbd08',
  '#8dc63f',
  '#39b54a',
  '#1cbbb4',
  '#0081ff',
  '#6739b6',
  '#9c26b0',
  '#e03997',
  '#a5673f',
  '#8799a3',
]
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
onMounted(() => {
  for (let it = 0; it < 10; it++) {
    let li = []
    for (let i = 0; i < 40; i++) {
      li.push({
        id: i + 1,
        label: `第 ${i + 1} 个元素`,
        color: getRandomColor(),
      })
    }
    list.push(li)
  }
})
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = (e) => {
  console.log('slide change ', e);
};
const start = (e) => {
  console.log('start change');
  console.log(e);
};
const end = () => {
  console.log('end change');
};
const handleRemove = (evt) => {
  console.log(evt, "change....");
};
const move = (e, originalEvent) => {
  console.log("开始移动");
  console.log(e);
  console.log(originalEvent);
  console.log("dd:" + controlledSwiper.value)
};
const dragleave = (e) => { //当拖拽离开这个div时执行的事件
  console.log('dragleave', e)
  console.log("dd:" + controlledSwiper)
};
</script>

<style lang="css" scoped>


.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(var(--icon-size) + var(--icon-gap-y)));
  grid-template-rows: repeat(auto-fill, calc(var(--icon-size) + var(--icon-gap-x)));
  grid-auto-flow: dense;
  box-sizing: border-box;
  justify-content: center;
}

.is-mini {
  width: calc(var(--icon-size) + var(--icon-gap-y));
  height: calc(var(--icon-size) + var(--icon-gap-x));
}

.is-small {
  width: calc(var(--icon-size) * 2 + var(--icon-gap-y) * 2);
  height: calc(var(--icon-size) * 2 + var(--icon-gap-x) * 2);
}

.is-medium {
  width: calc(var(--icon-size) * 4 + var(--icon-gap-y) * 4);
  height: calc(var(--icon-size) * 2 + var(--icon-gap-x) * 2);
}

.chosen {
  background-color: #000 !important;
  color: #fff;
}

</style>
