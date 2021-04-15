<demo>
基础使用
</demo>
<template>
  <t-switch v-model:value="decide" />
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const decide = ref(true);
    return { decide };
  },
};
</script>
