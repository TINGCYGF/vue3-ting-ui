<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'
import { router } from './router'

export default defineComponent({
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)//默认值
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    })
  }
})
</script>


<style lang="scss">
#nprogress {
  .bar {
    background: #6b9ab8 !important; //自定义颜色
  }

  .spinner-icon {
    border-color: #e5f2fa transparent transparent #e5f2fa;
  }
}
</style>