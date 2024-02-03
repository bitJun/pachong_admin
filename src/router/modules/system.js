const Layout = () => import('@/layout/index.vue')
const Parameter = () => import('@/views/system/parameter/index.vue')
const Menu = () => import('@/views/system/menu/index.vue')
const Icon = () => import('@/views/system/icon/index.vue')
const Message = () => import('@/views/system/message/index.vue')
const Api = () => import('@/views/system/api/index.vue')
const Print = () => import('@/views/system/print/index.vue')

export default [
  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统设置',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'parameter',
        component: Parameter,
        meta: {
          title: '参数配置',
        },
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu,
        meta: {
          title: '菜单维护',
        },
      },
      {
        path: 'icon',
        name: 'icon',
        component: Icon,
        meta: {
          title: '图标维护',
        },
      },
      {
        path: 'message',
        name: 'message',
        component: Message,
        meta: {
          title: '消息通知',
        },
      },
      {
        path: 'print',
        name: 'print',
        component: Print,
        meta: {
          title: '打印模板',
        },
      },
      {
        path: 'api',
        name: 'api',
        component: Api,
        meta: {
          title: '接口管理',
        },
      },
    ],
  },
]
