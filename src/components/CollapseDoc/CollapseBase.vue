<demo>
基础使用
</demo>
<template>
  <t-collapse v-model:selected="selected">
    <t-collapse-item title="《静夜思》李白" name="1">
      <pre>

      床前明月光，疑是地上霜。
      举头望明月，低头思故乡。
      </pre>
    </t-collapse-item>
    <t-collapse-item title="《登鹳雀楼》王之涣" name="2">
      <pre>

      白日依山尽，黄河入海流。
      欲穷千里目，更上一层楼。
      </pre>
    </t-collapse-item>
    <t-collapse-item title="《相思》王维" name="3">
      <pre>

      红豆生南国，春来发几枝。
      愿君多采撷，此物最相思。
      </pre>
    </t-collapse-item>
  </t-collapse>
</template>

<script>
import {ref} from "vue";
export default {
  setup(){
    let selected = ref(['1', '2', '3'])
    return {selected}
  }
}
</script>


