
import './assets/nikhil.css'
import './assets/nj.css'
import './assets/pp.js'
import './axios'
//import './assets/main.css'
//import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
