<template>
  <div>
<!--    <Switch :value="bool" @update:value="bool = $event" />-->
    <Switch v-model:value="bool" />
  </div>
</template>


<script lang="ts">
import Switch from '../lib/Switch/Switch.vue'
import { ref } from "vue";
export default {
  components: { Switch },
  setup(){
    const bool = ref(false)
    return { bool }
  }
}

</script>