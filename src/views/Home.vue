<template>
 <div class="home">
   <Topnav/>
   <div class="banner">
     <h1>Ting UI</h1>
     <h2>基于Vue3的UI框架</h2>
     <p class="actions">
       <a target="_blank" href="https://github.com/TINGCYGF/vue3-ting-ui">GitHub</a>
       <router-link to="/doc">开始</router-link>
     </p>
   </div>

   <div class="features">
     <ul>
       <li>
         <svg class="icon">
           <use xlink:href="#icon-vue"></use>
         </svg>
         <h3>基于 Vue 3</h3>
         <p>使用了 Vue 3 Composition API</p>
       </li>
       <li>
         <svg class="icon">
           <use xlink:href="#icon-typescript"></use>
         </svg>
         <h3>基于 TypeScript </h3>
         <p>源代码采用 TypeScript 书写（非严格检查）</p>
       </li>
       <li>
         <svg class="icon">
           <use xlink:href="#icon-UIzhongguo"></use>
         </svg>
         <h3>简约 UI</h3>
         <p>每个组件的UI设计简约大方
            简单易用
         </p>
       </li>
     </ul>
   </div>
 </div>

</template>
<script lang="ts">
import Topnav from "./Topnav.vue";
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>

$buttonColor: rgb(52, 176, 176);
$textColor: rgb(29, 110, 94);

.home {
  ::v-deep(.top_nav) {
    background: transparent;
  }

  @media (max-width: 500px) {
    ::v-deep(.top_nav) {
      background: #fff;
    }
  }

  .banner {
    padding: 180px 0 150px;
    color: $textColor;
    background: rgb(174, 209, 228);
    background: linear-gradient(135deg, rgb(209, 238, 238) 0%, rgb(1, 171, 166) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    margin: 0 auto;

    h1 {
      text-align: center;
      font-size: 34px;
      line-height: 52px;
    }

    h2 {
      text-align: center;
      margin-top: 12px;
      font-size: 20px;
      line-height: 26px;
    }

    > .actions {
      padding: 8px 0;
      font-size: 18px;
      margin-top: 16px;
      text-align: center;

      a {
        margin: 0 8px;
        background: $buttonColor;
        padding: 8px 26px;
        color: #fff;
        border-radius: 6px;
        border: none;
        &:hover{
          text-decoration:underline
        }
      }

    }
  }

  .features {

    margin: 64px auto;
    width: 300px;
    @media (min-width: 800px) {
      width: 800px;
      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      > li {
        width: 300px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
        "icon title"
        "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          margin-bottom: 10px;
          grid-area: title;
          font-size: 24px;
        }

        > p {
          grid-area: text;
          font-size: 18px;
        }
      }
    }
  }
}
</style>