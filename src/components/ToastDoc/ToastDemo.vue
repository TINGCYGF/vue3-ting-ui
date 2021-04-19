<template>
  <div class="ting-demo">
    <h1>Toast 弹出框</h1>
    <RevealContainer :component="ToastBase">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Tabs</code>组件,指定默认<span>Tab</span>
      </p>
    </RevealContainer>

    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import ToastBase from "./ToastBase.vue";

export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'disabled',
        desc: '禁止状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
    ]
    return {
      ToastBase,
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
