import './bootstrap/css/bootstrap.css'
import './bootstrap/font/bootstrap-icons.css'
import './assets/base.css'
import './assets/main.scss'
import './assets/responsive.scss'
import 'animate.css'
import './assets/locomotive-scroll.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from "gsap";

const app = createApp(App)

app.use(router)
app.use(gsap)
app.mount('#app')
