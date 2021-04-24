<demo>
纵向菜单
</demo>
<template>
  <div class="container">
    <t-menu v-model:selected-index="selected" vertical>
      <t-menu-item name="content" index="1" class="submenu">内容管理</t-menu-item>
      <t-sub-menu name="user" index="2" class="submenu">
        <template v-slot:title>用户管理</template>
        <t-sub-menu
          name="userInfo" index="2-1">
          <template v-slot:title>用户信息</template>
          <t-menu-item
            name="personal"
            index="2-1-1">个人信息</t-menu-item>
          <t-menu-item
            name="account"
            index="2-1-2">账号信息</t-menu-item>
        </t-sub-menu>
        <t-menu-item
          name="authority"
          index="2-2">用户权限</t-menu-item>
      </t-sub-menu>
      <t-sub-menu name="statistics" index="3" class="submenu">
        <template v-slot:title>统计分析</template>
        <t-menu-item
          name="month"
          index="3-1">月度数据</t-menu-item>
        <t-menu-item
          name="quarter"
          index="3-2">季度数据</t-menu-item>
        <t-menu-item
          name="year"
          index="3-3">年度数据</t-menu-item>
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
  .submenu{
    min-height: 36px;
     .ting-menu-item{
      min-height: 30px;
    }
  }
}
</style>


