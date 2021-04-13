<template>
  <RevealContainer :component="InputBase" />

</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import InputBase from "./InputBase.vue";

export default {
  components: { RevealContainer },
  setup() {
    return {
      InputBase,
    };
  },
};
</script>

