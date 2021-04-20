<template>
<!--  <Teleport to="body">-->
    <div class="ting-wrapper" :class="toastClasses" v-if="visible">
      <div class="ting-toast" ref="toast">
        <div class="message">
          <div v-if="!enableHtml">{{toastSlot}}</div>
          <div v-else v-html='toastSlot'></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
      </div>
    </div>
<!--  </Teleport>-->
</template>
<script>
// 构造组件的选项
import {computed, reactive, ref} from 'vue'
export default {
  name: 't-toast',
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    autoClose:{
      type:[Boolean,Number],
      default: 2,
      validator(value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text:'关闭',callback:undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','middle','bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    },
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods:{
    close(){
      this.$emit("update:visible", false)
    },
    updateStyles(){  // 解决父元素设置了 min-height 之后，子元素 height:100% 没作用的问题
      this.$nextTick(()=>{
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoClose * 1000)
      }
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback(this)  // this === toast 实例 |  将toast实例传给callback，callback里就可调用toast里的方法
      }
    },
  }
}
</script>

<style lang="scss">

@keyframes slide-up {
  0%{opacity: 0;transform:translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{opacity: 0;transform:translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes fade-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
// wrapper 负责居中定位， toast 负责动画
.ting-wrapper{
  z-index: 20;
  $animation-duration:300ms;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top{
    top: 0;
    .ting-toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .ting-toast{
      animation: fade-in $animation-duration;
    }
  }
  &.position-bottom{
    bottom: 0;
    .ting-toast{
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.ting-toast {
  font-size: 14px;color: #fff;min-height: 30px;line-height: 1.8;
  padding: 0 16px;
  display: flex;align-items: center;
  background: #00cec9;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message{
    padding: 8px 0;
  }
  .close{
    cursor: pointer;
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line{
    height: 100%;
    border-left: 2px solid #ffffff;
    margin-left: 16px;
  }
}
</style>