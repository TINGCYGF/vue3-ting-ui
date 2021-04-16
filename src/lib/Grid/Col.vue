<template>
  <div class="ting-col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default{
  name: 't-col',
  props: {
    span: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss">
.ting-col{
  height: 100px;
  background: #00cec9;
  width: 50%;
  border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n}{
      width: ($n / 24) * 100%;
    }
  }


}
</style>