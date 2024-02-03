import { createRouter, createWebHashHistory } from 'vue-router'

import redirect from './modules/redirect'
import error from './modules/error'
import login from './modules/login'
import lock from './modules/lock'
import home from './modules/home'
import test from './modules/test'
import basic from './modules/basic'
import customer from './modules/customer'
import customerFollowUp from './modules/customerFollowUp'
import doctor from './modules/doctor'
import expense from './modules/expense'
import triage from './modules/triage'
import marketing from './modules/marketing'
import schedule from './modules/schedule'
import system from './modules/system'

/* 菜单栏的路由 */
// 固定菜单
export const fixedRoutes = [...home]
// 动态菜单
export const asyncRoutes = [
  ...customer,
  ...customerFollowUp,
  ...triage,
  ...doctor,
  ...schedule,
  ...expense,
  ...marketing,
  ...basic,
  ...system,
  ...test,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...redirect, // 统一的重定向配置
    ...login,
    ...lock,
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
