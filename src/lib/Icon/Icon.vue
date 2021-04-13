<template>
  <svg class="ting-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'

export default {
  name: 't-icon',
  props: {
    name: String
  }
}
</script>
<style lang="scss">
.ting-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>