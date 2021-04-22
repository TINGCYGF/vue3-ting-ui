<template>
  <div class="ting-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import mitt from 'mitt';
import {onMounted, provide} from "vue";
export default {

  name: "t-collapse",
  props:{
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    },
  },

  setup(props, context) {
    const emitter: mitt.Emitter = mitt();
    provide('emitter', emitter)
    onMounted(() => {
      emitter.emit('update:selected', props.selected)
      emitter.on('update:removeSelected', (name: any) => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        context.emit('update:selected', selectedCopy)
        emitter.emit('update:selected', selectedCopy)
      })
      emitter.on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        if (props.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        emitter.emit('update:selected', selectedCopy)
        context.emit('update:selected', selectedCopy)
        console.log(selectedCopy);
      })

    })

    return { }
  }
}
</script>

<style lang="scss">
.ting-collapse{
  border: 1px solid #92b8b8;
  border-radius: 4px;

}
</style>