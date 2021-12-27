import {createApp} from 'vue'
import App from './App.vue'
import './css/index.css'
import naive from 'naive-ui'
import {GesturePlugin} from '@vueuse/gesture'
import Vconsole from 'vconsole';
// const vConsole = new Vconsole();

createApp(App).use(naive).use(GesturePlugin).mount('#app')
