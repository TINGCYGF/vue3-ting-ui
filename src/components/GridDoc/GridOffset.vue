<demo>
自定义间隙
</demo>
<template>
  <t-row class="row">
    <t-col span="12"><div></div></t-col>
    <t-col span="6" offset="6"><div></div></t-col>
  </t-row>
  <t-row class="row">
    <t-col span="8"><div></div></t-col>
    <t-col span="5" offset="3"><div></div></t-col>
    <t-col span="4" offset="4"><div></div></t-col>
  </t-row>
  <t-row class="row">
    <t-col span="2"><div></div></t-col>
    <t-col span="5" offset="3"><div></div></t-col>
    <t-col span="4" offset="4"><div></div></t-col>
  </t-row>
</template>

<style lang="scss" scoped>
  .row>div>div {
    min-height: 36px;
    margin-top: 3px ;
    background-color: rgb(175, 229, 229);
  }
</style>