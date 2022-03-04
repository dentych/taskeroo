import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import auth from "@/plugins/auth";

import "@/assets/index.css"
import {createPinia} from "pinia";

const app = createApp(App)

app.use(createPinia())
app.use(auth)
app.use(router)

app.mount('#app')
