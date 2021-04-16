<template>
  <div class="buttonDemo">
    <h1>Button 按钮</h1>

    <RevealContainer :component="GridDemo">
      <p>
        可以使用<code>level</code>属性来定义按键样式。
      </p>
    </RevealContainer>

    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import GridDemo from "./GridRow.vue"
export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'level',
        desc: '按钮类型',
        type: 'string',
        select: 'default / primary / success / warning / error',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸',
        type: 'string',
        select: 'normal / small / mini',
        default: 'normal',
      },
      {
        params: 'round',
        desc: '圆形边框',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'disabled',
        desc: '禁止状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'loading',
        desc: '加载中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return {
      GridDemo,
      data
    };
  },
};
</script>

<style lang="scss" scoped>
  .buttonDemo{
    h1{
      font-size: 28px;
    }
    code{
      background-color: #e2fafa;
      border-radius: 2px;
      padding: 3px 5px;
      margin: 0 3px;
    }
  }
</style>
