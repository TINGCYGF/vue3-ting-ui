import Button from "./Button/Button.vue";
import Dialog from "./Dialog/Dialog.vue";
import Switch from "./Switch/Switch.vue";
import Tabs from "./Tab/Tabs.vue";
import Tab from "./Tab/Tab.vue";
import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here
    app.component("Switch", Switch);
    app.component("Button", Button);
    app.component("Dialog", Dialog);
    app.component("Tab", Tab);
    app.component("Tabs", Tabs);
  },
};
