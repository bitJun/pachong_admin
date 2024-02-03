<template>
  <div>
    
    <pro-pagination
      :total="total"
      :pageNum="pageNum"
      :pageSize="pageSize"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, watch, toRefs } from 'vue'

export default defineComponent({
  name: 'testList',
  setup() {
    const state = reactive({
      pageNum: 1,
      pageSize: 10,
      total: 100,
      handlePageChange(event) {
        if (event?.pageNo) {
          state.pageNum = event?.pageNo
        }
        if (event.pageSize) {
          state.pageSize = event?.pageSize
        }
      },
    })
    watch(
      () => state.pageNum,
      val => {
        console.log('state.pageNum', state.pageNum, 'val', val)
      },
      { deep: true }
    )
    watch(
      () => state.pageSize,
      val => {
        console.log('state.pageSize', state.pageSize, 'val', val)
      },
      { deep: true }
    )
    return { ...toRefs(state) }
  },
})
</script>
