import "normalize.css";
import "./assets/css/index.css";

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import pinia from "./stores";
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
