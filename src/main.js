import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
import i18n from "./lang";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
