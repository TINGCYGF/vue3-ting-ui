<template>
  <div class="ting-col" ref="aaa"
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
    gutter: {
      type: [Number, String],
      required: false,
      default: 0
    },

  },
  data(){
    return{
      aaa: 0
    }
  },
  methods:{
    fn(){
      // console.log('----------------')
      // console.log(this.$refs.aaa)
    }
  },
  mounted() {
    this.fn()
  }


}
</script>

<style lang="scss">
.ting-col{
  height: 100px;
  //background: #00cec9;
  width: 50%;
  //border: 1px solid red;
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