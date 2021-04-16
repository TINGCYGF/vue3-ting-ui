<demo>
  基础使用
</demo>
<template>
<div style="border: 1px solid darkmagenta">
  <t-row gutter="40">
    <t-col><div style="border: 1px solid red">2</div></t-col>
    <t-col><div style="border: 1px solid red">2</div></t-col>
    <t-col><div style="border: 1px solid red">2</div></t-col>
  </t-row>
  <t-row gutter="20">
    <t-col span="12"><div style="border: 1px solid red">2</div></t-col>
    <t-col span="12"><div style="border: 1px solid red">2</div></t-col>
  </t-row>
  <t-row>
    <t-col span="1" offset="1">1</t-col>
    <t-col span="2" offset="2">2</t-col>
  </t-row>
</div>
</template>

<script lang="ts">
import Row from "../../lib/Grid/Row.vue";
import Col from "../../lib/Grid/Col.vue"
export default {
  components: {
    "t-row": Row,
    "t-col": Col
  }
}
</script>