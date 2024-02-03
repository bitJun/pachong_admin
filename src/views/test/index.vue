<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'testList',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>
