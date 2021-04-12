import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
// @ts-ignore
export const openDialog = (options) => {
  const { title, content, ok, cancel, bottomBtn } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          // @ts-ignore
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          title,
          bottomBtn,
          ok,
          cancel,
        },
        { content }
      );
    },
  });
  app.mount(div);
};
