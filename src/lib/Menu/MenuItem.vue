<template>
  <div class="ting-menu-item" :class="{active}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
import {inject, onMounted, ref, watchEffect, nextTick, getCurrentInstance} from "vue";

export default {
  name: 'tMenuItem',

  props: {
    index: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props){

    const vm = getCurrentInstance()
    const menuBus = inject("tingMenuEmitter")
    const active = ref(false)
    const pathArr = ref([])
    const path = ref()
    watchEffect(() => {
      path.value = pathArr.value && pathArr.value.join('/')
    })
    onMounted(() => {
      menuBus.on('click-item', listenItem)
      menuBus.on('vertical-prop', listenVertical)
      menuBus.on('update-menu', listenRefresh)
      nextTick(() => {
        getNames(vm)
      })
    })
    //构建对应path
    const getNames = (vm) => {
      pathArr.value = pathArr.value || []
      vm.type.name === 'tMenuItem' || vm.type.name === 'tSubMenu' ? pathArr.value.unshift(vm.type.props.name) : ''
      if (vm.parent.type.name !== 'tMenu') {
        getNames(vm.parent)
      }
    }
    const onClick = () => {
      active.value = true
      menuBus.emit('click-item', {
        index: props.index,
        name: props.name,
        path: path.value
      })
    }
    const listenItem = (data) => {
      //所有item被点击会抛出自己的index，其他item检查，不是自己被点击就deactive
      active.value = props.index === data.index
    }
    const listenVertical = (value) => {
      let vertical;
      vertical = value
    }
    const listenRefresh = (data) => {
      //监听到index检查自身active
      if (data.index) {
        active.value = props.index === data.index
        //监听到path，如果是自己则抛出index
      } else if (data.path === path.value) {
        menuBus.emit('update-menu', { index: props.index })
      }
    }
    return { active, pathArr, path, onClick}
  },

  // beforeDestroy() {
  //   this.eventBus.$off('click-item', this.listenItem)
  //   this.eventBus.$off('vertical-prop', this.listenVertical)
  //   this.eventBus.$off('update-menu', this.listenRefresh)
  // }
}
</script>
<style scoped lang="scss">
.ting-menu-item {
  width: 100%;
  padding: 5px 15px;
  white-space: nowrap;
  min-width: 8em;
  display: flex;
  align-items: center;
  &:hover {
    background: #F1FFFF;
    color: #aefcfc;
  }
  &.active {
    overflow: hidden;
    color: #5ae0e0;
    background: #F1FFFF;
  }
}
.ting-sub-menu .ting-menu-item {
  &:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  &:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
.ting-sub-menu.vertical .ting-menu-item {

  &:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  padding-left: 25px;
}
.ting-sub-menu.vertical .ting-sub-menu.vertical .ting-menu-item {
  padding-left: 35px;
  &.active {
    color: #5ae0e0;
    background: #F1FFFF;
  }
}
</style>