import Toast from "./Toast/Toast.vue"
import {
  defineComponent,
  createApp,
  ref, h
} from "vue";

// @ts-ignore
let currentToast

export default {
  // @ts-ignore
  install(app){
    app.config.globalProperties.$toast = function (message: any, toastOptions?: any){
      // @ts-ignore
      if (currentToast) {
        // @ts-ignore
        let {toast, divEle} = currentToast
        toast.unmount(divEle);
        divEle.remove();
      }
      let divEle = document.createElement("div");
      document.body.appendChild(divEle)
      currentToast = createToast({
        divEle,
        message,
        propsData:toastOptions,
      })
    }
  }
}
// @ts-ignore  help函数内部调用
function createToast({divEle,message,propsData}){
  const close = () => {
    // @ts-ignore
    toast.unmount(divEle);
    divEle.remove();
  };

  const Constructor = defineComponent({
    extends: Toast,
    setup(){
      let toastSlot = ref('提示内容')
      toastSlot.value = message
      return {toastSlot}
    }
  })
  const toast = createApp({
    render() {
      return h(
        Constructor,
        {
          visible: true,
          // @ts-ignore
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ...propsData
        },
      );
    },
  });
  toast.mount(divEle)
  return {toast, divEle}
}