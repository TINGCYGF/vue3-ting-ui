<template>
  <div class="ting-demo">
    <h1>Collapse 折叠面板</h1>
    <RevealContainer :component="CollapseBase">
      <p>
        可以使用<code>selected</code>属性定义<code>t-collapse</code>组件默认打开内容，它接收一个<code>Array</code>。根据子组件<code>name</code>属性标识，它接收一个<code>String</code>且唯一标识。
      </p>
    </RevealContainer>

    <RevealContainer :component="CollapseSingle">
      <p>
        可以使用<code>single</code>属性定义<code>t-collapse</code>组件只打开一个内容，它接收一个<code>Boolean</code>值。
      </p>
    </RevealContainer>

    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import CollapseBase from "./CollapseBase.vue"
import CollapseSingle from "./CollapseSingle.vue"

export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'selected',
        desc: '弹出位置',
        type: 'array[string]',
        select: '[name]',
        default: '[]',
      },
      {
        params: 'single',
        desc: '手风琴效果',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
    ]
    return {
      CollapseBase,
      CollapseSingle,
      data
    };
  },
};
</script>

<style lang="scss" scoped>
.ting-demo{
  max-width: 800px;
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
