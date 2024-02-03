const Layout = () => import('@/layout/index.vue')
const Marketing = () => import('@/views/marketing/index.vue')

export default [
  {
    path: '/marketing',
    component: Layout,
    name: 'marketing',
    meta: {
      title: '营销中心',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'marketing',
        component: Marketing,
        meta: {
          title: '运营中心',
        },
      },
    ],
  },
]
