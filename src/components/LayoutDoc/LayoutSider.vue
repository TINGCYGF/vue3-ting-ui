<demo>
侧边栏
</demo>
<template>
  <t-layout class="layout">
    <t-header class="header">header</t-header>
    <t-layout>
      <t-sider class="sider">sider</t-sider>
      <t-content class="content">content</t-content>
    </t-layout>
    <t-footer class="footer">footer</t-footer>
  </t-layout>
</template>

<script>
import Layout from "../../lib/Layout/Layout.vue";
import Content from "../../lib/Layout/Content.vue";
import Footer from "../../lib/Layout/Footer.vue";
import Header from "../../lib/Layout/Header.vue";
import Sider from "../../lib/Layout/Sider.vue";

export default {
  components: {
    't-layout': Layout,
    't-content': Content,
    't-footer': Footer,
    't-header': Header,
    't-sider': Sider
  }
}
</script>

<style lang="scss" scoped>
.layout{
  height: 220px;
  text-align: center;
  .header{
    min-height: 50px;
    background-color: #86f3f1;
    line-height: 50px;
  }
  .content{
    background-color: #d4f6f6;
    line-height: 120px;
  }
  .footer{
    min-height: 60px;
    background-color: #97f8f6;
    line-height: 60px;
  }
  .sider{
    min-width: 80px;
    background-color: #56e7e5;
    line-height: 120px;
  }
}
</style>