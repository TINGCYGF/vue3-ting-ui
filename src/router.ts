import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '/', redirect: "/doc/intro"},
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStarted},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo}
      ]}
  ]
})
