<template>
  <div class="buttonDemo">
    <h1>Layout 布局</h1>

    <RevealContainer :component="LayoutBase">
      <p>
        布局容器，其下可嵌套<code>t-header</code><code>t-sider</code><code>t-content</code><code>t-footer</code> 或<code>t-layout</code>本身，可以放在任何父容器中。
      </p>
    </RevealContainer>

    <RevealContainer :component="LayoutSider">
      <p>
        侧边栏由<code>t-layout</code>嵌套<code>t-sider</code>生成。
      </p>
    </RevealContainer>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import LayoutBase from "./LayoutBase.vue"
import LayoutSider from "./LayoutSider.vue"
export default {
  components: { RevealContainer, Attr },
  setup() {
    return {
      LayoutBase,
      LayoutSider,
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
