<template>
  <div class="ting-password">
    <Input
      v-model:value="value"
      :value="value"
      :type="visible ? 'text' : 'password'"
    />
    <Icon :name="visible ? 'eye_protection' : 'visible'" class="ting-icon-password" @click="toggle"></Icon>

  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import Input from "./Input.vue";
import Icon from "../Icon/Icon.vue";

export default {
  name: "t-password",
  props: {
    value: String
  },
  components: { Input, Icon },
  setup(props, context) {
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };

    return { visible, toggle };
  },
};
</script>

<style lang="scss">

.ting-password{
  white-space: nowrap;
  position: relative;
  display: inline-block;
  .ting-icon-password{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
  }
}
</style>
