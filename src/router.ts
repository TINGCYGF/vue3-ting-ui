import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDoc/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDoc/ButtonDemo.vue'
import DialogDemo from './components/DialogDoc/DialogDemo.vue'
import TabsDemo from './components/TabsDoc/TabsDemo.vue'
import InputDemo from "./components/InputDoc/InputDemo.vue";
import GridDemo from "./components/GridDoc/GridDemo.vue";
import LayoutDemo from "./components/LayoutDoc/LayoutDemo.vue";
import ToastDemo from "./components/ToastDoc/ToastDemo.vue";
import PopoverDemo from "./components/PopoverDoc/PopoverDemo.vue";
import Intro from "./views/markdown/intro.md";
import Install from "./views/markdown/install.md";
import GetStarted from "./views/markdown/get-started.md";
import CollapseDemo from "./components/CollapseDoc/CollapseDemo.vue";
import MenuDemo from "./components/MenuDoc/MenuDemo.vue";


import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (string: any) => h(Markdown, { content: string, key: string });

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
      {path: '', redirect: "/doc/intro"},
      {path: 'intro', component: md(Intro)},
      {path: 'install', component: md(Install)},
      {path: 'get-started', component: md(GetStarted)},
      {path: 'switch', component: SwitchDemo},
      {path: 'button', component: ButtonDemo},
      {path: 'dialog', component: DialogDemo},
      {path: 'tabs', component: TabsDemo},
      {path: 'input', component: InputDemo},
      {path: 'grid', component: GridDemo},
      {path: 'layout', component: LayoutDemo},
      {path: 'toast', component: ToastDemo},
      {path: 'popover', component: PopoverDemo},
      {path: 'collapse', component: CollapseDemo},
      {path: 'menu', component: MenuDemo},


      ]}
  ]
})
