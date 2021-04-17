<template>
  <div class="ting-layout-wrapper" :class="layoutClass">
    <component
      v-for="(colNode, index) in colNodes"
      :key="index"
      :is="colNode"
    />
  </div>
</template>

<script>
import Sider from "./Sider.vue";
import {ref} from "vue";
export default {
  name: 't-layout',
  setup(props, context){
    const layoutClass = ref({hasSider: false})
    const colNodes = context.slots.default();
    colNodes.forEach((tabNode) => {
      // @ts-ignore
      console.log(tabNode.type.name)
      if (tabNode.type.name === Sider.name) {
        layoutClass.value.hasSider = true
      }
    });
    return { colNodes, layoutClass}
  },
}
</script>
<style lang="scss">
.ting-layout-wrapper{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>