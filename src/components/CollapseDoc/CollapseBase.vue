<demo>
基础使用
</demo>
<template>
  <t-collapse>
    <t-collapse-item title="标题1">内容111111111111111111111111111111111111111111111 11111111111111111111111111111</t-collapse-item>
    <t-collapse-item title="标题2">内容22222222222222222222222222222222222222222222 222222222222222222222222222222</t-collapse-item>
    <t-collapse-item title="标题3">内容3333333333333333333333333333333333333333333 3333333333333333333333333333333</t-collapse-item>
  </t-collapse>
</template>

<script>
import Collapse from "../../lib/Collapse/Collapse.vue"
import CollapseItem from "../../lib/Collapse/CollapseItem.vue"

export default {
  components: {
    't-collapse': Collapse,
    't-collapse-item': CollapseItem
  }
}
</script>


