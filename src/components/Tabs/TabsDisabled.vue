<demo>
禁用状态
</demo>
<template>
  <t-tabs v-model:selected="TabFlag">
    <t-tab title="导航1">内容1</t-tab>
    <t-tab title="导航2">内容2</t-tab>
    <t-tab title="导航3" disabled>内容3</t-tab>
  </t-tabs>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const TabFlag = ref("导航1");
    return { TabFlag };
  },
};
</script>
