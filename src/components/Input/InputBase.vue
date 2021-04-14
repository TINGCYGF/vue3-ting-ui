<demo>
基础使用
</demo>
<template>
  <label>
    <Input :value="value"  placeholder="请输入" disabled></Input>
  </label>
  <label>
    <Input :value="value"  placeholder="请输入" readonly></Input>
  </label>
  <label>
    <Input :value="value" error="警告" placeholder="请输入" ></Input>
  </label>

  <label>
    <Input :value="value" clearable placeholder="请输入" ></Input>
  </label>

  <label>
    <Input v-model:value="value" @change="change" clearable placeholder="请输入" ></Input>
  </label>

  <div>{{value}}</div>
  <div>{{a}}</div>
</template>

<script lang="ts">
import Input from "../../lib/Input/Input.vue";
import {ref} from "vue";
export default {
  components: {
    Input,
  },
  setup(){
    let a = ref(null)
    const value:string = ref(null)
    value.value = '禁用状态'

    const change = (e) => {
      console.log(e);
    }
    return {value, change, a}
  }
};
</script>
