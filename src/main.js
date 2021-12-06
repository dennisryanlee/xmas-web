import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import BootstrapVue3 from 'bootstrap-vue-3'
import ConfirmationService from 'primevue/confirmationservice';
import Unicon from 'vue-unicons'
import * as GoIcons from './icons'

import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/fr'

import './assets/main.css';
// import 'primevue/resources/themes/tailwind-light/theme.css'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Unicon.add(Object.values(GoIcons))

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(PrimeVue)
  .use(ConfirmationService)
  .use(Unicon, { fill: 'black', height: 22, width: 22 })
  .use(ElementPlus, { locale })
  .mount('#app')
