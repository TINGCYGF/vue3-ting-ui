<demo>
自定义标题
</demo>
<template>
  <t-button level="error" @click="toggle"> 打开Dialog有标题</t-button>
  <t-dialog v-model:visible="showDialog" title="自定义标题">
    <p>这是内容</p>
  </t-dialog>
</template>

<script lang="ts">
import {ref} from "vue";
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
