<demo>
  基础使用
</demo>
<template>
  <t-row>
    <t-col></t-col>
    <t-col></t-col>
  </t-row>
  <t-row>
    <t-col>1</t-col>
    <t-col>2</t-col>
    <t-col>1</t-col>
    <t-col>2</t-col>
  </t-row>
  <t-row>
    <t-col>1</t-col>
    <t-col>2</t-col>
    <t-col>2</t-col>
  </t-row>
  <t-row>
    <t-col span="2">1</t-col>
    <t-col span="22">2</t-col>
  </t-row>
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