<demo>
基础使用
</demo>
<template>
  <t-button @click="$toast('点击弹出提示')">上方弹出</t-button>
  <t-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</t-button>
  <t-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</t-button>
</template>

<script lang="ts">
import Toast from "../../lib/Toast/Toast.vue";

import { ref } from "vue";
export default {
  components: {
    "t-toast":Toast
  },
  setup() {
    const TabFlag = ref("导航1");
    return { TabFlag };
  },
};
</script>
