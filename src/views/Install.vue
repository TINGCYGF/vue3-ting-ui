<template>
  <t-button round disabled loading>普通按钮</t-button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const value = ref(false)
    return {value}
  }
}
</script>