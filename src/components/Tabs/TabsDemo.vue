<template>
  <Tabs v-model:selected="TabFlag">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2 -----">内容2</Tab>
    <Tab title="导航3" disabled>内容3</Tab>
  </Tabs>
</template>


<script lang="ts">
import Tabs from '../../lib/Tab/Tabs.vue'
import Tab from '../../lib/Tab/Tab.vue'
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const TabFlag = ref("导航1");
    return {
      TabFlag,
    };
  },
}

</script>