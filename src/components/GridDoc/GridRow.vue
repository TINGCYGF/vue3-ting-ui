<demo>
  基础使用
</demo>
<template>
  <t-row>
    <t-col><div class=" dark"></div></t-col>
  </t-row>

  <t-row>
    <t-col span="12"><div class="bg"></div></t-col>
    <t-col span="12"><div class="light"></div></t-col>
  </t-row>

  <t-row>
    <t-col span="8"><div class="bg"></div></t-col>
    <t-col span="8"><div class="light"></div></t-col>
    <t-col span="8"><div class="bg"></div></t-col>
  </t-row>

  <t-row>
    <t-col span="6"><div class="bg"></div></t-col>
    <t-col span="6"><div class="light"></div></t-col>
    <t-col span="6"><div class="bg"></div></t-col>
    <t-col span="6"><div class="light"></div></t-col>
  </t-row>

  <t-row>
    <t-col span="4"><div class="bg"></div></t-col>
    <t-col span="4"><div class="light"></div></t-col>
    <t-col span="4"><div class="bg"></div></t-col>
    <t-col span="4"><div class="light"></div></t-col>
    <t-col span="4"><div class="bg"></div></t-col>
    <t-col span="4"><div class="light"></div></t-col>
  </t-row>

</template>

<style scoped>

.dark {
  background: rgb(175, 229, 229);
}
.bg {
  background: rgb(218, 255, 255);
}
.light {
  background: rgb(252, 252, 252);
}
div {
  min-height: 36px;
  margin-top: 2px ;
}
</style>