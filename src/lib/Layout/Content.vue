<template>
  <div class="ting-content-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name:'t-content'
}
</script>

<style lang="scss">
.ting-content-wrapper{
  flex-grow: 1;
}
</style>