<template>
  <RevealContainer :component="ButtonNormal" />
  <RevealContainer :component="ButtonSize" />
  <RevealContainer :component="ButtonRound" />
  <RevealContainer :component="ButtonDisabled" />
  <RevealContainer :component="ButtonLoading" />
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import ButtonNormal from "./ButtonNormal.vue";
import ButtonSize from "./ButtonSize.vue";
import ButtonRound from "./ButtonRound.vue";
import ButtonDisabled from "./ButtonDisabled.vue";
import ButtonLoading from "./ButtonLoading.vue";
export default {
  components: { RevealContainer },
  setup() {
    return {
      ButtonNormal,
      ButtonSize,
      ButtonRound,
      ButtonDisabled,
      ButtonLoading,
    };
  },
};
</script>

<style lang="scss" scoped></style>
