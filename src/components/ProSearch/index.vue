<template>
  <div>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      v-model:currentPage="pageNo"
      @current-change="handleCurrentChange"
      :page-sizes="pageSizes"
      v-model:pageSize="pageLimit"
      :layout="layout"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  // onBeforeMount,
  // watch
} from 'vue'
export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      total: props.total || 10,
      pageSizes: [10, 20, 30, 40, 50, 100],
      pageLimit: props.pageSize,
      pageNo: props.pageNum,
      layout: 'total, sizes, prev, pager, next, jumper',
      handleCurrentChange(val) {
        emit('pageChange', {
          pageNo: val,
        })
      },
      handleSizeChange(val) {
        emit('pageChange', {
          pageSize: val,
        })
      },
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
