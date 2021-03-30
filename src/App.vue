<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)//默认值
    provide('asideVisible', asideVisible)
  }
})
</script>

<style>

</style>