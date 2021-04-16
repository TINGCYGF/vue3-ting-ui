<demo>
基础使用
</demo>
<template>
  <label>
    <t-input v-model:value="value"></t-input>
  </label>
  <p class="showValue">{{ value }}</p>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const value = ref("默认内容");
    return { value };
  },
};
</script>
<style scoped>
.showValue{
    margin: 14px;
    font-size: 14px;
}
</style>
