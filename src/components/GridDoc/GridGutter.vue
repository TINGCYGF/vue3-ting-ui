<demo>
等间空隙
</demo>
<template>
 <div class="gutter">
   <t-row gutter="30">
     <t-col span="12"><div></div></t-col>
     <t-col span="12"><div></div></t-col>
   </t-row>
   <t-row gutter="20">
     <t-col span="8"><div></div></t-col>
     <t-col span="8"><div></div></t-col>
     <t-col span="8"><div></div></t-col>
   </t-row>
   <t-row gutter="10">
     <t-col span="6"><div></div></t-col>
     <t-col span="6"><div></div></t-col>
     <t-col span="6"><div></div></t-col>
     <t-col span="6"><div></div></t-col>
   </t-row>
 </div>
</template>

<style lang="scss" scoped>
.gutter{
  >div>div>div {
    min-height: 36px;
    margin-top: 3px ;
    background: rgb(175, 229, 229);
  }
}
</style>