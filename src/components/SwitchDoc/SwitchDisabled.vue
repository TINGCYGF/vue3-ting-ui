<demo>
禁用状态
</demo>
<template>
  <t-switch v-model:value="decide" disabled />
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const decide = ref(false);
    return { decide };
  },
};
</script>
