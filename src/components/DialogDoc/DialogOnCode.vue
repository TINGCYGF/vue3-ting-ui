<demo>
一键打开 Dialog
</demo>
<template>
  <t-button @click="showDialog">打开对话框</t-button>
</template>

<script lang="ts">
import {openDialog} from 'vue3-ting-ui'
export default {
  setup() {
    const showDialog = () => {
      openDialog({
        title: "我的标题",
        bottomBtn: true,
        content: "这是内容",
        ok() {
          console.log("ok");
          return true
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
