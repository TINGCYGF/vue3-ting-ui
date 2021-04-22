<template>
  <div class="ting-collapse-item">
    <div class="ting-collapse-title" @click="onClick" :class="{'active': open,}">
      <Icon name="next" v-if="icon" class="ting-collapse-icon" :class="{'icon-active': open,}" />
      <span>{{title}}</span>
    </div>
    <Spread :visible="open" class="ting-collapse-content"><slot></slot></Spread>
  </div>
</template>

<script lang="ts">
import Icon from "../Icon/Icon.vue";
import Spread from "../Icon/Spread.vue"
import {ref, onMounted, inject } from 'vue'
export default {
  components: {Icon, Spread},
  name: "t-collapse-item",
  props:{
    title:{
      type: String,
      required: true
    },
    icon:{
      type: [Boolean, String],
      default: true
    },
    name:{
      type: [Number, String],
      require: true
    },
  },
  setup(props){
    const emitter = inject('emitter')
    const open = ref(false)
    const onClick = () => {
      if(open.value){
        emitter.emit('update:removeSelected', props.name)
      }else {
        emitter.emit('update:addSelected', props.name)

      }
    }
    onMounted(() => {
      emitter.on('update:selected', (names) => {
        open.value = names.indexOf(props.name) >= 0;
      })
    })
    return {onClick, open}
  }
}
</script>

<style lang="scss">
.ting-collapse-item{
  &:first-child{
    >.ting-collapse-title{
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    >.ting-collapse-title{
      //border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      &.active{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

  }
  > .ting-collapse-title{
    vertical-align: middle;
    border: 1px solid #92b8b8;
    margin: -1px -1px -1px -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    cursor: pointer;
    background-color: #f1ffff;
    >.ting-collapse-icon{
      transition: transform 250ms;
    }
    >.icon-active{
      transform: rotateZ(90deg);
    }
    >span{
      padding-left: 3px;
    }
  }

  > .ting-collapse-content{
    font-size: 14px;
    color: #807c7c;
    word-break: break-all;
    padding: 4px;
  }

}
</style>