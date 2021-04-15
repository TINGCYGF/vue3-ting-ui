<demo>
密码隐藏
</demo>
<template>
  <t-password v-model:value="value"></t-password>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
  setup(){
    const value = ref('password')
    return {value}
  }
};
</script>
