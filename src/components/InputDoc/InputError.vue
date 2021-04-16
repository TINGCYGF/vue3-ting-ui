<demo>
错误提示
</demo>
<template>
  <label>
    <t-input value="内容错误" :error="errorMessage"></t-input>
  </label>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const errorMessage = ref('错误提示');
    return { errorMessage };
  },
};
</script>
