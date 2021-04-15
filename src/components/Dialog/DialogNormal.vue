<demo>
基本用法
</demo>
<template>
  <t-button level="primary" @click="toggle">打开Dialog</t-button>
  <t-dialog v-model:visible="showDialog">
    <p>Dialog内容</p>
  </t-dialog>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const showDialog = ref(false);
    const toggle = () => {
      showDialog.value = !showDialog.value;
    };
    return {
      showDialog,
      toggle,
    };
  },
};
</script>
