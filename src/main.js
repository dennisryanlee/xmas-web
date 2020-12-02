import { createApp } from 'vue'

import router from './router'
import axios from 'axios'

import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/fr'

let app = createApp(App);
app.use(ElementPlus, { locale })
app.use(router, axios)
app.mount('#app')