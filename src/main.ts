import './assets/scss/index.scss'
import './lib/ting.scss'
import 'vue3-ting-ui/dist/lib/ting.css'
import "github-markdown-css";

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
// @ts-ignore
import { TingUI } from 'vue3-ting-ui'
import {TingPlugin} from "./lib";


const app = createApp(App)
app.use(router)
app.use(TingPlugin)
app.use(TingUI)
app.mount('#app')
