<demo>
自定义关闭按钮
</demo>
<template>
  <t-button @click="middle">中间弹出</t-button>
</template>

<script>
export default {
  methods:{
    middle(){
      this.$toast(
        '弹出提示内容',
        {position:'middle', closeButton: { text:'确定', callback:()=>{ alert('回调的输出')}}})
    },
  }
}
</script>

