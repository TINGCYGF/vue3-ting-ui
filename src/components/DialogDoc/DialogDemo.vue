<template>
  <div class="ting-demo">
    <h1>Dialog 对话框</h1>

    <RevealContainer :component="DialogNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Dialog</code>组件。
      </p>
    </RevealContainer>
    <RevealContainer :component="DialogOverlay">
      <p>
        可以使用<code>closeOnClickOverlay</code>属性，禁止点击遮罩层关闭<code>Dialog</code>组件，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <RevealContainer :component="DialogTitle">
      <p>
        可以使用<code>title</code>属性来定义<code>Dialog</code>组件标题。
      </p>
    </RevealContainer>
    <RevealContainer :component="DialogBottom">
      <p>
        可以使用<code>bottomBtn</code>属性给<code>Dialog</code>组件添加<code>button</code>，它接受一个<code>Boolean</code>值，<code>ok</code>对应函数需要返回<code>true</code>才会退出。
      </p>
    </RevealContainer>
    <RevealContainer :component="DialogOnCode">
      <p>可以引入<code>openDialog</code>模块创建一个<code>Dialog</code>组件。</p>
    </RevealContainer>
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import DialogNormal from "./DialogNormal.vue";
import DialogOnCode from "./DialogOnCode.vue";
import DialogTitle from "./DialogTitle.vue";
import DialogBottom from "./DialogBottom.vue";
import DialogOverlay from "./DialogOverlay.vue";

export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'closeOnClickOverlay',
        desc: '点击遮罩层关闭',
        type: 'boolean',
        select: 'false / true',
        default: 'true',
      },
      {
        params: 'title',
        desc: '自定义标题',
        type: 'string',
        select: '自定义标题',
        default: 'null',
      },
      {
        params: 'bottomBtn',
        desc: '带有按钮',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认按钮执行函数',
        type: 'function',
        select: 'function return false（不关闭Dialog） / function return true（关闭Dialog）',
        default: 'null',
      },
      {
        params: 'cancel',
        desc: '取消按钮执行函数',
        type: 'function',
        select: 'function（均关闭Dialog）',
        default: 'null',
      }
    ]
    return {
      DialogNormal,
      DialogOnCode,
      DialogOverlay,
      DialogTitle,
      DialogBottom,
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
