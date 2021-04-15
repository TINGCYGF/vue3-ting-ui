<template>
  <div class="attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
      <tr>
        <th class="attr-title" v-for="(item,index) in columns">{{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <td class="attr-title td" v-for="(value,key) in item">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'attr',
  props: {
    data: {
      type: Object
    }
  },
  setup(){
    const columns = [
      {
        title: '属性',
      },
      {
        title: '说明',
      },
      {
        title: '类型',
      },
      {
        title: '可选值',
      },
      {
        title: '默认值',
      },
    ]
    return {columns}
  }
}
</script>

<style lang="scss" scoped>
.attr {
  max-width: 800px;
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .attr-title {
    text-align: left;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #94a49b;
    padding: 15px;
    max-width: 250px;
  }

  .td {
    color: #606266;
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>
