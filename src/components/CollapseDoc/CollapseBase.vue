<demo>
基础使用
</demo>
<template>
  <t-collapse v-model:selected="selected">
    <t-collapse-item title="标题1" name="1">内容</t-collapse-item>
    <t-collapse-item title="标题2" name="2">内容</t-collapse-item>
    <t-collapse-item title="标题3" name="3">内容</t-collapse-item>
  </t-collapse>
</template>

<script>
import {ref} from "vue";

import Collapse from "../../lib/Collapse/Collapse.vue"
import CollapseItem from "../../lib/Collapse/CollapseItem.vue"
export default {
  components: {
    't-collapse': Collapse,
    't-collapse-item': CollapseItem
  },
  setup(){
    let selected = ref(['1', '2'])
    return {selected}
  }
}
</script>


