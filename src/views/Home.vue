<template>
    <Topnav/>
    <div class="banner">
      <h1>Ting UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/TINGCYGF/vue3-ting-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
* {margin: 0;padding: 0}
</style>