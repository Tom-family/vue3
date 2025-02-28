import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import pinia from '@/utils/pinia.ts'

const app = createApp(App)

app.use(createPinia())
app.use(pinia)
app.use(router)
app.mount('#app')
