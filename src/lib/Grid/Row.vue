<template>
  <div class="ting-row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default{
  name: 't-row',
}
</script>

<style lang="scss">
  .ting-row{
    display: flex;
    flex-wrap: nowrap;
  }
</style>