<template>
  <div class="buttonDemo">
    <h1>Button 按钮</h1>

    <RevealContainer :component="ButtonNormal">
      <p>
        可以使用<code>level</code>属性来定义按键样式。
      </p>
    </RevealContainer>
    <RevealContainer :component="ButtonSize">
      <p>
        可以使用<code>size</code>属性来定义按钮是否圆形，它接受<code>big</code>,<code>small</code>属性值。
      </p>
    </RevealContainer>
    <RevealContainer :component="ButtonRound">
      <p>
        可以使用<code>round</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <RevealContainer :component="ButtonDisabled">
      <p>
        可以使用<code>disabled</code>属性来定义按钮是否禁用状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
    <RevealContainer :component="ButtonLoading">
      <p>
        可以使用<code>loading</code>属性来定义按钮是否加载状态，它接受一个<code>Boolean</code>值。
      </p>
    </RevealContainer>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import ButtonNormal from "./ButtonNormal.vue";
import ButtonSize from "./ButtonSize.vue";
import ButtonRound from "./ButtonRound.vue";
import ButtonDisabled from "./ButtonDisabled.vue";
import ButtonLoading from "./ButtonLoading.vue";
export default {
  components: { RevealContainer },
  setup() {
    return {
      ButtonNormal,
      ButtonSize,
      ButtonRound,
      ButtonDisabled,
      ButtonLoading,
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
