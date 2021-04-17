# 开始


**欢迎使用 [Ting UI](https://tingcygf.gitee.io/ting-ui-vue3/#/)**


## 介绍

Ting UI 是一个简洁的前端 UI 框架，基于 vue3.0 的开源 UI 组件库, 由[Ting](https://github.com/TINGCYGF) 开发使用`vite2` `vue3.0` `typescript`搭建。<br>
Ting UI框架主要用于学习vue3.0新特性，请勿用于生产环境！欢迎各位与作者[Ting](https://github.com/TINGCYGF) 交流学习<br><br>
PS: 该文档网页适配**移动端**和**PC**

<br>
<br>


> #### 版本:**_0.0.10_**
>
> - 更新内容: `初次完成简单组件`


> #### 版本:**_0.0.15_**
>
> - 更新内容: `添加Grid组件`

<br>

# 安装

打开终端运行下列命令：

```
npm install vue3-ting-ui
```

或

```
yarn add vue3-ting-ui
```

<br />

# 快速使用

### 完整引入

```
import 'vue3-ting-ui/dist/lib/ting.css'
import { createApp } from 'vue'
import App from './App.vue'
import { TingUI } from 'vue3-ting-ui'

const app = createApp(App)
app.use(TingUI)
app.mount('#app')
```

> 以上代码便完成了 Ting-ui 的引入。需要注意的是，样式文件需要单独引入。

<br />

### 按需引入

> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：

```
import 'vue3-ting-ui/dist/lib/ting.css'
    import { createApp } from 'vue'
    import { Button: t-button } from 'vue3-ting-ui'
    import App from './App.vue'

    createApp(App).use(t-button).mount('#app')
```

<br />










