const Layout = () => import('@/layout/index.vue')
const CustomerFollowUp = () => import('@/views/customerFollowUp/index.vue')

export default [
  {
    path: '/customerFollowUp',
    component: Layout,
    name: 'customerFollowUp',
    meta: {
      title: '客户随访',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'customerFollowUp',
        component: CustomerFollowUp,
        meta: {
          title: '客户回访',
        },
      },
    ],
  },
]
