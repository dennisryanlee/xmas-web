import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import './assets/element-variables.scss'

import './assets/coy.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import 'element-plus/lib/theme-chalk/display.css';

import locale from 'element-plus/lib/locale/lang/fr'

createApp(App)
	.use(store)
	.use(router)
	.use(ElementPlus, { locale })
	.mount('#app')