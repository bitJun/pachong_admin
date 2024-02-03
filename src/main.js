import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import ElementPlus from 'element-plus'
import './assets/style/element-variables.scss'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from './router'
import store from './store'
import './permission'
import 'vite-plugin-svg-icons/register'
import * as Components from './global-components'
Object.entries(Components).forEach(([key, component]) => {
  app.component(key, component)
})
import * as Directives from '@/directive'
Object.values(Directives).forEach(fn => fn(app))
import useErrorHandler from './error-log'
useErrorHandler(app)
app
  .use(ElementPlus, {
    locale,
  })
  .use(store)
  .use(router)
  .mount('#app')
