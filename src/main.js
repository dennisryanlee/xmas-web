import { createApp } from 'vue'

import BootstrapVue3 from 'bootstrap-vue-3'
import Unicon from 'vue-unicons'
import * as GoIcons from './icons'

import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/fr'

import './assets/main.css';

Unicon.add(Object.values(GoIcons))

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(Unicon, { fill: 'black', height: 22, width: 22 })
  .use(ElementPlus, { locale })
  .mount('#app')