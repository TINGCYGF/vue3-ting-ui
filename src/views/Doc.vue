<template>
    <Topnav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Tabs 组件</router-link>
          </li>
        </ul>

      </aside>
      <main><router-view /></main>
    </div>

</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
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
aside {
  background-color: lavender;
  width: 150px;
  padding: 80px 16px 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ul {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
  }
}

</style>