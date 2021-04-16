<template>
  <div class="ting-demo">
    <h1>Tabs 导航栏切换</h1>
    <RevealContainer :component="TabsNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Tabs</code>组件,指定默认<span>Tab</span>
      </p>
    </RevealContainer>
    <RevealContainer :component="TabsDisabled">
      <p>
        可以使用<code>disabled</code>属性定义<code>Tab</code>组件禁止状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import TabsNormal from "./TabsNormal.vue";
import TabsDisabled from "./TabsDisabled.vue";

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
      TabsNormal,
      TabsDisabled,
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
