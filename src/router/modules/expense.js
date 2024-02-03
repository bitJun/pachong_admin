const Layout = () => import('@/layout/index.vue')
const Expense = () => import('@/views/expense/index.vue')

export default [
  {
    path: '/expense',
    component: Layout,
    name: 'expense',
    meta: {
      title: '费用管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'expense',
        component: Expense,
        meta: {
          title: '收银台',
        },
      },
    ],
  },
]
