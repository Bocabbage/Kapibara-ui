import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import './style.css'
import router from './router/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(TDesign)
app.use(router)
app.mount('#app')
