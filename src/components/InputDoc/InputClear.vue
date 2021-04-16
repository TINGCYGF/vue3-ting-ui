<demo>
一键清除
</demo>
<template>
  <label>
    <t-input v-model:value="value" clearable placeholder="请输入" ></t-input>
  </label>
  <p class="showValue">{{ value }}</p>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup(){
    const value = ref('一键清除')
    return { value }
  }
};
</script>

<style scoped>
.showValue{
  margin: 14px;
  font-size: 14px;
}
</style>
