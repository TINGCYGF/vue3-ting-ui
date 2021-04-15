<demo>
禁止点击遮罩层关闭
</demo>
<template>
  <t-button level="warning" @click="toggle">打开Dialog</t-button>
  <t-dialog v-model:visible="showDialog" :closeOnClickOverlay="false">
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
