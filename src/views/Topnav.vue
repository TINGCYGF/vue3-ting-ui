<template>
  <div class="topnav">

    <router-link to="/" class="logo">
      <div>
        <svg class="icon">
          <use xlink:href="#icon-Ting_560"></use>
        </svg>
      </div>
    </router-link>

    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
      <li><a href="https://www.yuque.com/u2368282/nvuyr1" target="_blank" >博客</a></li>
      <li><a href="https://github.com/TINGCYGF" target="_blank" >GitHub</a></li>
    </ul>

    <div v-if="visibleMenuButton" class="toggleAside" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  name: 'TopNav',
  props: {
    visibleMenuButton: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log();
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleAside}
  }
}
</script>

<style lang="scss" scoped>

$buttonColor: #0864a9;
$textColor: #05538c;

.topnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: $textColor;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background: #fff;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    margin-left: 30px;
    cursor: pointer;
    max-width: 8em;
    margin-right: auto;
    >div {
      border-radius: 50%;
      width: 38px;
      height: 38px;
      overflow: hidden;
      svg {
        position: relative;

        top: -21px;
        left: -18px;
        width: 80px;
        height: 80px;
      }
    }

  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      > a{
        color: inherit;

      }
    }
  }

  > .toggleAside {
    display: none;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);

    svg {
      width: 32px;
      height: 32px;
    }

  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin-left: auto;
      margin-right: auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>