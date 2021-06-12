<template>
  <div class="ting-col"
       :class="colClass"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

let validator = (value: {}) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

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
    S: {type: Object, validator},
    M: {type: Object, validator},
    L: {type: Object, validator},
    XL: {type: Object, validator}
  },
  setup(props){
    const createClasses = (obj: { span: any; offset: any; }, str = '') => {
      if (!obj) {
        return []
      }
      let array = []
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`)
      }else {
        array.push(`offset-${str}0`)
      }
      return array
    }
    const colClass = computed(() => {
      let {span, offset, S, M, L, XL} = props
      return [
        ...createClasses({span, offset}),
        ...createClasses(S, 's-'),
        ...createClasses(M, 'm-'),
        ...createClasses(L, 'l-'),
        ...createClasses(XL, 'xl-'),
      ]
    })
    return { colClass }
  }
}
</script>

<style lang="scss">
.ting-col{
  height: 100%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24)*100%;
    }
  }
  &.offset-0{
    margin-left: 0;
  }

  @media (min-width: 577px) {
    $class-prefix: col-s-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-s-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.offset-s-0{
      margin-left: 0;
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-m-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-m-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.offset-m-0{
      margin-left: 0;
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-l-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-l-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.offset-l-0{
      margin-left: 0;
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.offset-xl-0{
      margin-left: 0;
    }
  }
}
</style>