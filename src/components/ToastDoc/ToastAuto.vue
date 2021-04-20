<demo>
自定义弹出时间
</demo>
<template>
  <t-button @click="middle">中间弹出5S</t-button>
</template>

<script>
export default {
  methods:{
    middle(){
      this.$toast('弹出提示内容', {position:'middle', autoClose:'5'})
    },
  }
}
</script>


