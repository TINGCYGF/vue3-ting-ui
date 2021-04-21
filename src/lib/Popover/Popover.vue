<template>
  <div class="ting-popover" ref="popover">
      <div ref="contentWrapper"
           class="ting-popover-content ting-popover-zindex"
           v-if="visible"
           :class="{[`position-${position}`]:true}">
        <slot name="content" :close="close"></slot>
      </div>
    <span ref="triggerWrapper" class="ting-popover-trigger">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import {ref, nextTick, onMounted, watchEffect} from "vue";

export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value:any) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value:any) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  setup(props:any){
    const {trigger, position} = props
    let visible = ref(false)
    let contentWrapper = ref<HTMLDivElement>(null)
    let triggerWrapper = ref<HTMLDivElement>(null)
    let popover = ref<HTMLDivElement>(null)

    onMounted(() => {
      if (trigger === 'click') {
        popover.value.addEventListener('click', onClick)
      } else {
        popover.value.addEventListener('mouseenter', open)
        popover.value.addEventListener('mouseleave', close)
      }
    })
    const onClick = (event:any) => {
      if (triggerWrapper.value.contains(event.target)) {
        if (visible.value === true) {
          close()
        } else {
          open()
        }
      }
    }
    const open = () => {
      visible.value = true
      nextTick(() => {
        positionContent()
        document.addEventListener('click', onClickDocument)
        window.addEventListener("scroll", close, true);
      })
    }


    const positionContent = () => {
      document.body.appendChild(contentWrapper.value)
      const {width, height, top, left} = triggerWrapper.value.getBoundingClientRect()
      const {height: height2} = contentWrapper.value.getBoundingClientRect()
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.value.style.top = positions[position].top + 'px'
      contentWrapper.value.style.left = positions[position].left + 'px'
    }
    const close = () => {
      window.removeEventListener("scroll", close, true)
      console.log("close");
      visible.value = false
      document.removeEventListener('click', onClickDocument)
    }
    //关闭popover  的事件
    const onClickDocument = (e) => {
      if (popover.value && (popover.value === e.target || popover.value.contains(e.target))) {
        console.log("return");
        return
      }
      if (contentWrapper.value && (contentWrapper.value === e.target || contentWrapper.value.contains(e.target))) {

        return
      }
      close()
    }
    return {visible, triggerWrapper, contentWrapper, popover, close}
  },

  beforeUnmount() {
    let div = document.querySelector('.ting-content')
    if(div){div.parentNode.removeChild(div)}
    document.removeEventListener('click', this.onClickDocument)
  }
}
</script>

<style lang="scss">

.ting-popover{
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.ting-popover-trigger{
  display: inline-block;
  position: relative;
}
.ting-popover-content{
  position: absolute;
  border: solid 1px #1fd6c0;
  border-radius: 4px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    display: block;
    border: solid 10px transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: #1fd6c0;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>