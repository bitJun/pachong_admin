import { createRouter, createWebHashHistory } from 'vue-router'

import redirect from './modules/redirect'
import error from './modules/error'
import login from './modules/login'
import home from './modules/home'

/* 菜单栏的路由 */
// 固定菜单
export const fixedRoutes = [...home]
// 动态菜单
export const asyncRoutes = [
  // ...test,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    ...redirect, // 统一的重定向配置
    ...login,
    ...fixedRoutes,
    ...error,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
