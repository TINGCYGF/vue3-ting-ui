import Button from "./Button/Button.vue";
import Dialog from "./Dialog/Dialog.vue";
import Switch from "./Switch/Switch.vue";
import Tabs from "./Tab/Tabs.vue";
import Tab from "./Tab/Tab.vue";
import Input from "./Input/Input.vue";
import Password from "./Input/Password.vue";
import Row from "./Grid/Row.vue";
import Col from "./Grid/Col.vue";
import Layout from "./Layout/Layout.vue";
import Content from "./Layout/Content.vue";
import Sider from "./Layout/Sider.vue";
import Header from "./Layout/Header.vue";
import Footer from "./Layout/Footer.vue";
import Popover from "./Popover/Popover.vue";
import Collapse from "./Collapse/Collapse.vue";
import CollapseItem from "./Collapse/CollapseItem.vue";
import Menu from "./Menu/Menu.vue";
import MenuItem from "./Menu/MenuItem.vue";
import SubMenu from "./Menu/SubMenu.vue";


import { ComponentOptions, } from "vue";

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
    app.component("t-row", Row);
    app.component("t-col", Col);
    app.component("t-layout", Layout);
    app.component("t-content", Content);
    app.component("t-sider", Sider);
    app.component("t-header", Header);
    app.component("t-footer", Footer);
    app.component("t-popover", Popover);
    app.component("t-collapse", Collapse);
    app.component("t-collapse-item", CollapseItem);
    app.component("t-menu", Menu);
    app.component("t-menu-item", MenuItem);
    app.component("t-sub-menu", SubMenu);

  },
};
