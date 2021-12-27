<template>
  <n-slider v-model:value="count" :step="2" :min="60" :max="80"/>
  <div class="tw-bg-hero-pattern tw-bg-no-repeat tw-bg-cover ">
    <div class=" tw-overflow-y-visible tw-overflow-x-hidden" ref="demo" v-wheel="wheelHandler" v-drag="dragHandler">
      <div class="tw-flex tw-overscroll-contain  tw-transition-all tw-duration-500 tw-ease-out"
           :style="{'transform': `translateX(calc(${-numberSwipes + numberSwipess}* 100% - 0px))`}">
        <div v-for="item in list"
             class="tw-w-full tw-flex-shrink-0"
        >
          {{ numberSwipes }}
          <draggable
              :list="item"
              :sort="true"
              animation="500"
              @start="drag = true"
              @end="drag = false"
              item-key="id"
              tag="ul"
              class="app-grid"
              :style="{'--icon-size':count+'px'}"
          >
            <template #item="{ element }">
              <div class=" tw-transform tw-transition-all  active:tw-scale-105 is-mini tw-rounded-lg  tw-ease-in tw-duration-300 animate-ping "
                   :class="[element.id===9+item?'tw-col-span-2 tw-row-span-2 is-small':'',element.id===2+item?'tw-col-span-4 tw-row-span-2 is-medium ':''] "
                   :style="{ 'background-color': element.color }">
                <a href="">
                  <div>{{ element.label }}</div>
                </a>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
  <div ref="demo" v-wheel="wheelHandler">
    <div>pos: x:{{ x }}, y:{{ y }}</div>
    <div ref="el">
      Swipe here {{ isSwiping }},{{ direction }}
    </div>
    <div>
      numberSwipes{{ numberSwipes }}
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import draggable from 'vuedraggable'
import {useMouse, useSwipe} from "@vueuse/core/index";
import {useDrag, useWheel} from '@vueuse/gesture'
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

defineProps({
  msg: String
})

const aaa = () => console.log('aaa')

// Find more about `set()` on the "Motion Integration" page

const demo = ref()
const {x, y} = useMouse()
const el = ref(null)
const {isSwiping, direction} = useSwipe(el)
const list = reactive([])
const count = ref(60)
const numberSwipes = ref(0)
const numberSwipess = ref(0)
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
  for (let it = 0; it < 5; it++) {
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


const wheelHandler = ({movement: [x, y], wheeling}) => {
  console.log(x / 1000)
  console.log(wheeling)
  if (wheeling) {
    numberSwipess.value = x / 500
  }
  if (!wheeling) {
    numberSwipess.value = 0
    if (x < 0) {
      numberSwipes.value = numberSwipes.value === 8 ? 0 : numberSwipes.value + 1
    } else {
      numberSwipes.value = numberSwipes.value === 0 ? 8 : numberSwipes.value - 1
    }
    console.log(numberSwipes.value);
  }
}

const dragHandler = ({ movement: [x, y], dragging }) => {
  console.log(x / 1000)
  console.log(dragging)
  if (dragging) {
    numberSwipess.value = x / 500
  }
  if (!dragging) {
    numberSwipess.value = 0
    if (x < 0) {
      numberSwipes.value = numberSwipes.value === 8 ? 0 : numberSwipes.value + 1
    } else {
      numberSwipes.value = numberSwipes.value === 0 ? 8 : numberSwipes.value - 1
    }
    console.log(numberSwipes.value);
  }
}
// Composable usage
useWheel(wheelHandler, {
  domTarget: demo,
})
useDrag(dragHandler, {
  domTarget: demo,
})

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
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


</style>
