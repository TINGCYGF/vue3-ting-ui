<demo>
按钮功能
</demo>
<template>
  <t-button level="error" @click="toggle">打开Dialog</t-button>
  <t-dialog
    v-model:visible="showDialog"
    bottomBtn
    :ok="ok"
    :cancel="cancel"
  >
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
    const ok = () => {
      console.log('确定')
      return true;
    };
    const cancel = () => {
      console.log('取消')
    };
    return {
      showDialog,
      toggle,
      ok,
      cancel,
    };
  },
};
</script>
