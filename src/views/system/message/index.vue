<template>
  <div>
    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="params.user" placeholder="图标编码/名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onAdd">新建</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="消息编码" width="150" />
      <el-table-column prop="name" label="消息名称" width="120" />
      <el-table-column prop="state" label="消息分类" width="120" />
      <el-table-column prop="city" label="消息等级" width="120" />
      <el-table-column prop="address" label="推送对象" width="120" />
      <el-table-column prop="zip" label="状态" width="120" />
      <el-table-column prop="zip" label="创建时间" width="120" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick"
          >
            Detail
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'systemIcon',
  setup() {
    const state = reactive({
      params: {
        user: '',
      },
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
      ],
      onSubmit() {
      
      },
      onAdd() {

      },
      handleClick() {
        console.log('click')
      }
    })
    return { ...toRefs(state) }
  },
})
</script>
