<template>
  <div>
    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="params.user" placeholder="接口编码/名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onAdd">新建</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="接口编码" width="150" />
      <el-table-column prop="name" label="接口名称" width="120" />
      <el-table-column prop="state" label="接口" width="120" />
      <el-table-column prop="city" label="条件表达式" width="120" />
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
    <el-dialog v-model="addModal" :title="title">
      <el-form :model="form">
        <el-form-item label="接口编码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="接口名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="条件表达式" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="触发时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.range"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
        <el-form-item label="院区" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="onCancel"
          >
            取消
          </el-button>
          <el-button
            type="primary"
            @click="onSubmit"
          >
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'systemIcon',
  setup() {
    const state = reactive({
      addModal: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        range: ''
      },
      formLabelWidth: 120,
      params: {
        user: '',
      },
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        },
      ],
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
      title: '菜单维护',
      onSearch() {},
      onAdd() {
        state.addModal = true
      },
      handleClick() {
        console.log('click')
      },
      onCancel() {
        state.addModal = false;
      },
      onSubmit() {
        state.addModal = false;
      },
    })
    return { ...toRefs(state) }
  },
})
</script>
