<demo>
基础使用
</demo>
<template>
  <div class="container">
    <t-menu v-model:selected-index="selected" class="menu">
      <t-menu-item name="home" index="1" class="submenu">首页</t-menu-item>
      <t-sub-menu index="2" name="about" class="submenu">
        <template v-slot:title>关于</template>
        <t-menu-item name="culture" index="2-1">企业文化</t-menu-item>
        <t-menu-item name="developers" index="2-2">开发团队</t-menu-item>
        <t-menu-item name="contacts" index="2-3">联系方式</t-menu-item>
      </t-sub-menu>
      <t-sub-menu name="hire" index="3" class="submenu">
        <template v-slot:title>招聘</template>
        <t-menu-item name="font" index="3-1">前端开发</t-menu-item>
        <t-menu-item name="back" index="3-2">后端维护</t-menu-item>
        <t-menu-item name="sale" index="3-3">销售团队</t-menu-item>
      </t-sub-menu>
    </t-menu>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  setup(){
    const selected = ref('')
    return {selected}
  }
}
</script>

<style lang="scss">
.container{
  min-height: 120px;
  .submenu .ting-sub-menu{
    min-height: 36px;
     .ting-menu-item{
      min-height: 36px;
    }
  }
}
</style>


