import Button from "./Button/Button.vue";
import Dialog from "./Dialog/Dialog.vue";
import Switch from "./Switch/Switch.vue";
import Tabs from "./Tab/Tabs.vue";
import Tab from "./Tab/Tab.vue";
import Input from "./Input/Input.vue";
import Password from "./Input/Password.vue";


import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here
    app.component("t-switch", Switch);
    app.component("t-button", Button);
    app.component("t-dialog", Dialog);
    app.component("t-tab", Tab);
    app.component("t-tabs", Tabs);
    app.component("t-input", Input);
    app.component("t-password", Password);
  },
};
