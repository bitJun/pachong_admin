const Layout = () => import('@/layout/index.vue')
const Doctor = () => import('@/views/doctor/index.vue')

export default [
  {
    path: '/doctor',
    component: Layout,
    name: 'doctor',
    meta: {
      title: '医生看诊',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'doctor',
        component: Doctor,
        meta: {
          title: '医生看诊',
        },
      },
    ],
  },
]
