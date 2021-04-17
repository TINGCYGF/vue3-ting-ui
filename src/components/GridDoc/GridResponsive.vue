<demo>
响应式栅格
</demo>
<template>
  <t-row class="row" :gutter="20">
    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>

    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>

    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>

    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>

    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>

    <t-col
      span="12"
      :S="{span:8}"
      :M="{span:6, offset:2}"
      :L="{span:4}"
      :XL="{span:3, offset:1}"
    ><div></div></t-col>
  </t-row>

</template>

<style lang="scss" scoped>
.row>div>div {
  min-height: 36px;
  margin-top: 3px ;
  background-color: rgb(175, 229, 229);
}
</style>