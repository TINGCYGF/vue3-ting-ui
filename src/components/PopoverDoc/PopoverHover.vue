<demo>
触发方式
</demo>
<template>

  <t-popover trigger="hover">
    <template v-slot:content>
      <a href="https://gitee.com/TINGCYGF/ting-ui-vue3">这是个a链接</a>
    </template>
    <t-button>上方弹出</t-button>
  </t-popover>

  <t-popover position="left" trigger="hover">
    <template v-slot:content>
      <strong style="color: #F1453D">加粗的提示</strong>
    </template>
    <t-button>左边弹出</t-button>
  </t-popover>

  <t-popover position="bottom" trigger="hover">
    <template v-slot:content>
      提示内容
    </template>
    <t-button>下方弹出</t-button>
  </t-popover>

  <t-popover position="right" trigger="hover">
    <template v-slot:content>
      提示内容
    </template>
    <t-button>右边弹出</t-button>
  </t-popover>
</template>



