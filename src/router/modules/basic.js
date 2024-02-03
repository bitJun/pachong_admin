const Layout = () => import('@/layout/index.vue')
const Mechanism = () => import('@/views/basic/mechanism/index.vue')
const Department = () => import('@/views/basic/department/index.vue')
const Personnel = () => import('@/views/basic/personnel/index.vue')
const Dictionary = () => import('@/views/basic/dictionary/index.vue')
const Unit = () => import('@/views/basic/unit/index.vue')
const Project = () => import('@/views/basic/project/index.vue')
const Frequency = () => import('@/views/basic/frequency/index.vue')
const Combination = () => import('@/views/basic/combination/index.vue')
const FollowUp = () => import('@/views/basic/followUp/index.vue')

export default [
  {
    path: '/basic',
    component: Layout,
    name: 'basic',
    meta: {
      title: '基础维护',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'basic',
        component: Mechanism,
        meta: {
          title: '机构维护',
        },
      },
      {
        path: 'department',
        name: 'department',
        component: Department,
        meta: {
          title: '科室维护',
        },
      },
      {
        path: 'personnel',
        name: 'personnel',
        component: Personnel,
        meta: {
          title: '人员维护',
        },
      },
      {
        path: 'dictionary',
        name: 'dictionary',
        component: Dictionary,
        meta: {
          title: '字典维护',
        },
      },
      {
        path: 'unit',
        name: 'unit',
        component: Unit,
        meta: {
          title: '单位维护',
        },
      },
      {
        path: 'frequency',
        name: 'frequency',
        component: Frequency,
        meta: {
          title: '频次维护',
        },
      },
      {
        path: 'project',
        name: 'project',
        component: Project,
        meta: {
          title: '项目维护',
        },
      },
      {
        path: 'combination',
        name: 'combination',
        component: Combination,
        meta: {
          title: '组合维护',
        },
      },
      {
        path: 'followUp',
        name: 'followUp',
        component: FollowUp,
        meta: {
          title: '随访维护',
        },
      },
    ],
  },
]
