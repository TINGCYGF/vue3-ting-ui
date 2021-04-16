<template>
  <div class="ting-row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <component
      v-for="(colNode, index) in colNodes"
      :key="index"
      :is="colNode"
      :style="{paddingLeft: gutter / 2 + 'px',paddingRight: gutter / 2 + 'px'}"
    />
  </div>
</template>

<script lang="ts">
import Col from "./Col.vue";
export default{
  name: 't-row',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  setup(props, context){
    const colNodes = context.slots.default();
    colNodes.forEach((tabNode) => {
      // @ts-ignore
      if (tabNode.type.name !== Col.name) {
        throw new Error("t-row 子标签必须是 t-col");
      }
    });
    return { colNodes }
  },

}
</script>

<style lang="scss">
  .ting-row{
    display: flex;
    flex-wrap: nowrap;
  }
</style>