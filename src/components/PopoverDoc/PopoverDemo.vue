<template>
  <div class="ting-demo">
    <h1>Toast 提示框</h1>
    <RevealContainer :component="PopoverBase">
      <p>
        可以使用<code>position</code>属性定义<code>toast</code>弹出位置，可选择默认<code>top</code>or<code>middle</code><code>bottom</code>。
      </p>
    </RevealContainer>


    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import PopoverBase from "./PopoverBase.vue"

export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'position',
        desc: '弹出位置',
        type: 'string',
        select: 'top / middle / bottom',
        default: 'top',
      },
      {
        params: 'autoClose',
        desc: '弹出时间',
        type: 'number',
        select: 'number',
        default: '2',
      },
      {
        params: 'closeButton',
        desc: '关闭按钮',
        type: '{text, callback}',
        select: '',
        default: '{text:\'关闭\',callback:undefined}',
      },
      {
        params: 'enableHtml',
        desc: '支持HTML',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
    ]
    return {
      PopoverBase,
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
