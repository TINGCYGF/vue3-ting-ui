<demo>
基础使用
</demo>
<template>
  <t-button @click="top">上方弹出</t-button>
  <t-button @click="middle">中间弹出</t-button>
  <t-button @click="bottom">下方弹出</t-button>
</template>

<script>
export default {
  methods:{
    top(){
      this.$toast('弹出提示内容')
    },
    middle(){
      this.$toast('弹出提示内容', {position:'middle'})
    },
    bottom(){
      this.$toast('弹出提示内容', {position:'bottom'})
    },
  }
}
</script>


