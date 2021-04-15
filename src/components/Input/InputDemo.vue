<template>
  <div class="ting-demo">
    <h1>Input 输入框</h1>
    <RevealContainer :component="InputValue">
      <p>
        可以使用<code>v-model</code>动态双向绑定一个<code>Value</code>。
      </p>
    </RevealContainer>
    <RevealContainer :component="InputDisabled">
      <p>
        可以使用<code>disabled</code>属性定义禁止状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <RevealContainer :component="InputReadOnly">
      <p>
        可以使用<code>readonly</code>属性定义只读状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>

    <RevealContainer :component="InputError">
      <p>
        可以使用<code>error</code>属性定义错误提示，它接受错误内容字符串。
      </p>
    </RevealContainer>

    <RevealContainer :component="InputClear">
      <p>
        可以使用<code>clearable</code>属性定义一键清除，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>

    <RevealContainer :component="InputBase">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Tabs</code>组件,指定默认<span>Tab</span>
      </p>
    </RevealContainer>

  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import InputBase from "./InputPassword.vue";
import InputValue from "./InputValue.vue";
import InputDisabled from "./InputDisabled.vue";
import InputReadOnly from "./InputReadOnly.vue";
import InputError from "./InputError.vue";
import InputClear from "./InputClear.vue";

import { ref } from "vue";
export default {
  components: { RevealContainer },
  setup() {
    return {
      InputBase,
      InputValue,
      InputDisabled,
      InputReadOnly,
      InputError,
      InputClear
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

