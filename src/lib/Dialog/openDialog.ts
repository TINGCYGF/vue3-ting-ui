import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options: { title: any; content: any; ok: any; cancel: any; bottomBtn: any; }) => {
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
          "onUpdate:visible": (newVisible: any) => {
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
