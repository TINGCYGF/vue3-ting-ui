<template>
  <div class="layout">
    <Topnav class="nav" :visibleMenuButton="true"/>
    <div class="content">
      <aside class="aside_menu" :class="{visible: asideVisible}">
        <h2>文档</h2>
        <ul>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">快速使用</router-link>
          </li>
        </ul>

        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
        </ul>

      </aside>
      <main><router-view /></main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "./Topnav.vue";
import { inject, Ref } from 'vue'

export default {
  components: {Topnav},
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return {asideVisible}
  }
}
</script>


<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  > .nav {
    flex: 0;
  }

  > .content {
    display: flex;
    flex: 1;
    padding-top: 80px;
    padding-left: 156px;

    .aside_menu {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      margin-top: 70px;
      height: auto;
      width: 260px;
      overflow-x: hidden;
      overflow-y: scroll;
      border-right: 1px solid #e8e8e8;
      z-index: 10;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      padding-bottom: 32px;

      > h2 {
        margin-top: 6px;
        line-height: 22px;
        padding: 10px 12px;
        font-size: 16px;
        font-weight: 700;
      }

      > ul {
        > li {
          position: relative;
          width: 100%;
          font-size: 14px;

          > a {
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;

            &:hover {
              background: #f1ffff;
              border-bottom: none;
            }
          }

          .router-link-active {
            background-color: #f1ffff;
            border-right: none;

            &:after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              border-right: 3px solid #00cec9;
            }
          }
        }
      }
    }

    main {
      flex: 1;
      overflow: auto;
      padding: 60px 180px;
    }
  }
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      .aside_menu {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);

        &.visible {
          transform: translateX(0px);
        }
      }

      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>