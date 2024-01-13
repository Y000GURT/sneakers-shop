import { createApp } from 'vue'
import App from './App'
import store from '@/store'
import router from './components/router/router'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
