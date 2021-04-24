<template>
  <div class="ting-menu" :class="{vertical}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import mitt from 'mitt';
import {nextTick, onMounted, provide, ref} from "vue";

export default {
  name: 'tMenu',
  props: {
    selectedIndex: { type: String },
    vertical: { type: Boolean, default: false }
  },
  setup(props, context){
    const menuBus: mitt.Emitter = mitt();
    provide('tingMenuEmitter', menuBus)
    let currentIndex = ref()
    const currentName = ref()
    const currentPath = ref()
    onMounted(() => {
      menuBus.on('click-item', listenItem)
      nextTick(() => {
        menuBus.emit('vertical-prop', props.vertical)
        if (props.selectedIndex) {
          currentIndex.value = props.selectedIndex
          updateMenu({ index: props.selectedIndex })
        }
      })
    })

    const listenItem = (data: { index: any; name: any; path: any; }) => {
     currentIndex.value = data.index
      context.emit('index-change', currentIndex.value)
      context.emit('update:selectedIndex', currentIndex.value)
      currentName.value = data.name
      context.emit('name-change', currentName.value)
      currentPath.value = data.path
      context.emit('path-change', currentPath.value)
    }
    const updateMenu = (data: { index: any; }) => {
      menuBus.emit('update-menu', data)
    }
    return {currentIndex, currentName, currentPath, menuBus}
  },

}
</script>
<style scoped lang="scss">

.ting-menu {
  width: 100%;
  display: flex;
  cursor: pointer;
  user-select: none;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.1);
  &.vertical {
    flex-direction: column;
    box-shadow: none;
  }
}
</style>