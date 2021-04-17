<demo>
基础使用
</demo>
<template>
  <t-layout class="layout">
    <t-header class="header">header</t-header>
    <t-content class="content">content</t-content>
    <t-footer class="footer">footer</t-footer>
  </t-layout>
</template>

<style lang="scss" scoped>
.layout{
  height: 220px;
  text-align: center;
  .header{
    min-height: 50px;
    background-color: #86f3f1;
    line-height: 50px;
  }
  .content{
    background-color: #d4f6f6;
    line-height: 120px;
  }
  .footer{
    min-height: 60px;
    background-color: #97f8f6;
    line-height: 60px;
  }
}
</style>