<demo>
圆形边框
</demo>
<template>
  <t-button round>默认按键</t-button>
  <t-button level="primary" round>主题按键</t-button>
  <t-button level="success" round="true">成功按键</t-button>
  <t-button level="warning" :round="true">警告按键</t-button>
  <t-button level="error" :round=" 'true' ">危险按键</t-button>
</template>

