<template>
  <div class="ting-collapse-item">
    <div class="ting-collapse-title" @click="onClick">
      <Icon name="next" v-if="icon" />
      <span>{{title}}</span>
    </div>
    <div class="ting-collapse-content"><Spread :visible="open"><slot></slot></Spread></div>
  </div>
</template>

<script lang="ts">
import Icon from "../Icon/Icon.vue";
import Spread from "../Icon/Spread.vue"
import {ref} from 'vue'
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
      type: String,
      require: true
    }
  },
  setup(props, context){
    const open = ref(false)
    const onClick = () => {
      open.value = !open.value
    }
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
    >span{
      padding-left: 3px;
    }
  }

  > .ting-collapse-content{
    font-size: 14px;
    color: #807c7c;
  }

}
</style>