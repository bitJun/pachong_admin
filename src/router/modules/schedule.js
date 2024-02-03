const Layout = () => import('@/layout/index.vue')
const Schedule = () => import('@/views/schedule/index.vue')

export default [
  {
    path: '/schedule',
    component: Layout,
    name: 'schedule',
    meta: {
      title: '排班管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'schedule',
        component: Schedule,
        meta: {
          title: '排班管理',
        },
      },
    ],
  },
]
