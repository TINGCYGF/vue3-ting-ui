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

下一节：[组件](#/doc/switch)
