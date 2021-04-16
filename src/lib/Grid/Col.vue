<template>
  <div class="ting-col"
       :class="[`col-${span}`, offset && `offset-${offset}`]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">

export default{
  name: 't-col',
  props: {
    span: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    offset: {
      type: [Number, String],
      required: false,
    },
  },


}
</script>

<style lang="scss">
.ting-col{
  height: 100%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n}{
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: col-offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

}
</style>