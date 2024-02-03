const Layout = () => import('@/layout/index.vue')
const Triage = () => import('@/views/triage/index.vue')

export default [
  {
    path: '/triage',
    component: Layout,
    name: 'triage',
    meta: {
      title: '分诊台',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'triage',
        component: Triage,
        meta: {
          title: '分诊台',
        },
      },
    ],
  },
]
