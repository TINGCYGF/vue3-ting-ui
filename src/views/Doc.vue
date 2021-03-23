<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>边栏</aside>
      <main>主体</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {Topnav}
}
</script>