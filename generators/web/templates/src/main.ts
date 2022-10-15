import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"
import {router} from './router/index'
const pinia=createPinia();
createApp(App).use(router).use(pinia).mount('#app')
