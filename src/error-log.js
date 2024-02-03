import { nextTick } from 'vue'
import store from '@/store'
const flag = true // 为了演示，默认开启错误监控。如果你的项目不需要错误监控，请设为false

export default app => {
  if (flag) {
    app.config.errorHandler = function(err, vm, info) {
      nextTick(() => {
        store.dispatch('errorLog/addErrorLog', {
          err,
          // vm, // 这里不保存vm，否则渲染错误日志的时候控制台会有警告
          info,
          url: window.location.href,
          id: Date.now(),
        })
        console.error(err, info)
      })
    }
  }
}
