<template>
  <div class="ting-sub-menu" :class="{open:selfOpen,vertical}">
    <div class="title" @click="onClick">
      <slot name="title"></slot>
      <Icon name="next" class="ting-icon"></Icon>
    </div>
    <div class="popover">
      <Spread :visible="selfOpen">
        <slot></slot>
      </Spread>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "../Icon/Icon.vue";
import Spread from "../Icon/Spread.vue";
import { inject, onMounted, ref, watchEffect } from "vue";
export default {
  name: 'tSubMenu',
  components: { Icon, Spread },
  props: {
    index: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  setup(props: { open: any; index: string; vertical: any; }){
    const menuBus = inject("tingMenuEmitter")
    const selfOpen = ref(false)
    const vertical = ref(false)
    const clickable = ref(true)
    selfOpen.value = JSON.parse(JSON.stringify(props.open))
    let indexArr = ref()
    watchEffect(() =>{
      indexArr.value = props.index.split('-')
    })

    onMounted(() => {
      //item被点击，抛出值为一个对象{index,name,path}
      menuBus.on('click-item', listenItem)
      //sub被点击，抛出值为一个字符串 index
      menuBus.on('click-sub', listenSub)
      //传递vertical 值为Boolean
      menuBus.on('vertical-prop', listenVertical)
      //更新展开状态，值为对象{index}或{path}
      menuBus.on('update-menu', listenRefresh)
    })
    const onClick = () =>  {
      selfOpen.value = !selfOpen.value
      menuBus.emit('click-sub', props.index)
    }
    const listenItem = (data: any) => {
      //如果默认展开 直接返回
      if (props.open) { return }
      //横向菜单时，点击item直接关闭所有sub，纵向菜单调用refresh逻辑
      !vertical.value ? (selfOpen.value = false) : listenRefresh(data)
    }
    const listenSub = (index: string) => {
      if (props.open) { return }
      //当sub被点击时，所有sub检查index，不在路径中的sub关闭，被点击的sub开关状态由点击事件确定
      if (props.index === index) {
        return
      }
      let arr = index.split('-')
      indexArr.value.forEach((str: any, n: any) => {
        str !== arr[n] ? selfOpen.value = false : ''
      })
    }
    const listenVertical = (value: any) => {
      vertical.value = value
    }
    const listenRefresh = (data: { index: string; }) => {
      if (props.open) { return }
      //检查sub是否在index路径中
      if (data.index) {
        let arr = data.index.split('-')
        let result = true
        indexArr.value.forEach((str: string, n: number) => {
          str !== arr[n] ? (result = false) : ''
        })
        //如果在路径中，打开 如果不在路径中，关闭
        selfOpen.value = result
      }
    }

    return { selfOpen, vertical, clickable, indexArr, onClick }
  },

  // beforeDestroy() {
  //   this.eventBus.$off('click-item', this.listenItem)
  //   this.eventBus.$off('click-sub', this.listenSub)
  //   this.eventBus.$off('vertical-prop', this.listenVertical)
  //   this.eventBus.$off('update-menu', this.listenRefresh)
  // }
}
</script>
<style scoped lang="scss">

.ting-sub-menu {
  //color: #e6FFFF;
  font-size: 14px;
  position: relative;
  width: 100%;
  display: flex;
  >.title {
    padding: 5px 15px;
    position: relative;
    width: 100%;
    min-width: 8em;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background: #F1FFFF;
    }
    >.ting-icon {
      margin-left: auto;
      transition: transform 0.3s;
      color: #2e8b57;
    }
  }
  >.popover {
    width: 100%;
    position: absolute;
    margin-top: 2px;
    top: 100%;
    left: 0;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &.open {
    >.title {
      >.ting-icon {
        transform: rotateZ(90deg);
      }
    }
  }
}
.ting-sub-menu.vertical {
  //color: #e6ffff;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  >.title {
    flex-grow: 1;
    padding: 5px 15px;
    position: relative;
    width: 100%;
    min-width: 8em;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background: #F1FFFF;
    }
    >.ting-icon {
      margin-left: auto;
      transition: transform 0.3s;
    }
  }
  >.popover {
    position: static;
    box-shadow: none;
  }
  &.open {
    >.title {
      >.ting-icon {
        transform: rotateZ(90deg);
      }
    }
  }
}
.ting-sub-menu .ting-sub-menu {
  &:first-child {
    .title {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
  }
  &:last-child {
    .title {
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
}
.ting-sub-menu.vertical .ting-sub-menu.vertical .title {
  padding-left: 25px;
}
.ting-sub-menu .ting-sub-menu .popover {
  top: 0;
  left: 100%;
  margin-top: 0;
  margin-left: 2px;
}
.ting-sub-menu.vertical .ting-sub-menu.vertical .popover {
  margin-left: 0;
}
</style>