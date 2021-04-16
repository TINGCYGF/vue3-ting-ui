<template>
  <div class="ting-demo">
    <h1>Switch 开关</h1>
    <RevealContainer :component="SwitchNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Switch</code>组件。
      </p>
    </RevealContainer>
    <RevealContainer :component="SwitchDisabled">
      <p>
        可以使用<code>disabled</code>属性，以此来禁用<code>Switch</code>组件，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <RevealContainer :component="SwitchLoading">
      <p>
        可以使用<code>loading</code>属性，显示<code>Switch</code>组件加载状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import SwitchNormal from "./SwitchNormal.vue";
import SwitchDisabled from "./SwitchDisabled.vue";
import SwitchLoading from "./SwitchLoading.vue";

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
      {
        params: 'loading',
        desc: '加载中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return { SwitchNormal, SwitchDisabled, SwitchLoading, data };
  },
};
</script>

<style lang="scss" scoped>
.ting-demo{
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
