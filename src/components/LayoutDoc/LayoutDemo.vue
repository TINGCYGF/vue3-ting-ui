<template>
  <div class="buttonDemo">
    <h1>Layout 布局</h1>

    <RevealContainer :component="LayoutBase">
      <p>
        区域按照 24 等分的原则进行划分,可以使用<code>span</code>属性来定义区域占比。
      </p>
    </RevealContainer>

    <RevealContainer :component="LayoutSider">
      <p>
        区域按照 24 等分的原则进行划分,可以使用<code>span</code>属性来定义区域占比。
      </p>
    </RevealContainer>


    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import LayoutBase from "./LayoutBase.vue"
import LayoutSider from "./LayoutSider.vue"
export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'span',
        desc: '栅格占比',
        type: 'number',
        select: '1~24',
        default: '24',
      },
      {
        params: 'gutter',
        desc: '等间间隙',
        type: 'number',
        select: 'number',
        default: '0',
      },
      {
        params: 'offset',
        desc: '左间隔占比',
        type: 'number',
        select: '1~24',
        default: '0',
      },
      {
        params: '直接写span, offset',
        desc: '屏幕宽度小于577px',
        type: 'number',
        select: '1~24',
        default: 'undefined',
      },

    ]
    return {
      LayoutBase,
      LayoutSider,
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
