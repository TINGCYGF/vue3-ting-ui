<demo>
支持HTML
</demo>
<template>
  <t-button @click="middle">弹出黑色字体</t-button>
</template>

<script>
export default {
  methods:{
    middle(){
      this.$toast(
        `<div style="color: #1b1f23">弹出内容</div>`,
        {enableHtml: true})
    },
  }
}
</script>
