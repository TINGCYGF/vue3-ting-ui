import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import InputDemo from "./components/Input/InputDemo.vue";
import Intro from "./views/markdown/intro.md";
import Install from "./views/markdown/install.md";
import GetStarted from "./views/markdown/get-started.md";

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (string: any) => h(Markdown, { content: string, key: string });

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '/', redirect: "/doc/intro"},
        {path: 'intro', component: md(Intro)},
        {path: 'install', component: md(Install)},
        {path: 'get-started', component: md(GetStarted)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo}
      ]}
  ]
})
