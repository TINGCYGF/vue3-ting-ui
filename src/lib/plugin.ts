import Toast from "./Toast/Toast.vue"
import {render, defineComponent, onMounted, getCurrentInstance, createApp, resolveDynamicComponent} from "vue";


// @ts-ignore
let currentToast

export default {
  // @ts-ignore
  install(app, options){
    app.config.globalProperties.$toast = function (message: any, toastOptions: any){
      // @ts-ignore
      if(currentToast){
        // @ts-ignore
        currentToast= null
      }
      currentToast = createToast({
        app,
        message,
        propsData:toastOptions,
        onClose:()=>{
          currentToast = null
        }
      })
    }
  }
}
// @ts-ignore  help函数内部调用
function createToast({app,message,propsData,onClose}){
   const toast = createApp({
     extends: Toast,
     props:propsData,
     setup(props, context){
       const close = onClose
       const toastSlot = message
       return {toastSlot, close}
     }
   })
  console.log(toast);
  const divEle = document.createElement("div");
  document.body.appendChild(divEle)
  toast.mount(divEle)
  return toast
}