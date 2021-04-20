<template>
  <div class="ting-demo">
    <h1>Toast 提示框</h1>
    <RevealContainer :component="ToastBase">
      <p>
        可以使用<code>position</code>属性定义<code>toast</code>弹出位置，可选择默认<code>top</code>or<code>middle</code><code>bottom</code>。
      </p>
    </RevealContainer>

    <RevealContainer :component="ToastAuto">
      <p>
        可以使用<code>autoClose</code>属性定义<code>toast</code>弹出时间，它接收一个<code>Number</code>类型。
      </p>
    </RevealContainer>

    <RevealContainer :component="ToastButton">
      <p>
        可以使用<code>closeButton</code>属性自定义<code>toast</code>关闭内容以及回调执行，它接收一个<code>{text, callback}</code>。
      </p>
    </RevealContainer>

    <RevealContainer :component="ToastHtml">
      <p>
        可以使用<code>enableHtml</code>属性自定义<code>toast</code>支持HTML写法，它接收一个<code>Boolean</code>值。
      </p>
    </RevealContainer>

    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import ToastBase from "./ToastBase.vue";
import ToastAuto from "./ToastAuto.vue";
import ToastButton from "./ToastButton.vue";
import ToastHtml from "./ToastHtml.vue"

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
        default: '5',
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
      ToastBase,
      ToastAuto,
      ToastButton,
      ToastHtml,
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
