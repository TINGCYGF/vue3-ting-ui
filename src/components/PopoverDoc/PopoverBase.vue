<demo>
基础使用
</demo>
<template>
  <t-popover>
    <template v-slot:content>
      <div>内容222222222222222</div>
    </template>
    <t-button>按钮</t-button>
  </t-popover>
</template>

<script>
import Popover from "../../lib/Popover/Popover.vue"
export default {
  components: {
    't-popover':Popover,
  },
  setup(){

  }
}
</script>

<style>

</style>


