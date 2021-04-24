<template>
  <div class="ting-demo">
    <h1>Menu 菜单</h1>
    <RevealContainer :component="MenuBase">
      <p>
        可以使用<code>selected-index</code>属性获取菜单选择信息，也可以监听<code>selected-change</code>事件，必填<code>index</code>属性定义唯一标识。
      </p>
    </RevealContainer>

    <RevealContainer :component="MenuVertical">
      <p>
        可以使用<code>vertical</code>属性定义为纵向菜单息，它接收一个<code>Boolean</code>值。
      </p>
    </RevealContainer>



    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from "../RevealContainer.vue";
import Attr from "../Attr.vue";
import MenuBase from "./MenuBase.vue"
import MenuVertical from "./MenuVertical.vue";
export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'selected-index',
        desc: '选择信息',
        type: 'string',
        select: 'name',
        default: '',
      },
      {
        params: 'vertical',
        desc: '纵向菜单',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'index',
        desc: '子菜单的唯一标志，必填',
        type: 'string',
        select: '',
        default: '',
      },
      {
        params: 'name',
        desc: '子菜单的名称，必填',
        type: 'string',
        select: '',
        default: '',
      },
      {
        params: 'open',
        desc: '默认展开',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'index-change',
        desc: '点击 item 时触发事件',
        type: '',
        select: '',
        default: '',
      },
      {
        params: 'name-change',
        desc: '点击 item 时触发事件',
        type: '',
        select: '',
        default: '',
      },
      {
        params: 'path-change',
        desc: '点击 item 时触发事件',
        type: '',
        select: '',
        default: '',
      },
    ]
    return {
      MenuBase,
      MenuVertical,
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
