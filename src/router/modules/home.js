const Layout = () => import('@/layout/index.vue')
const Dashboard = () => import('@/views/home/index.vue')
const Statistics = () => import('@/views/statistics/index.vue')
const User = () => import('@/views/user/index.vue')
const Auction = () => import('@/views/goods/auction/index.vue')
const Consignment = () => import('@/views/goods/consignment/index.vue')
const OrderList = () => import('@/views/order/list.vue')
const OrderAppraise = () => import('@/views/order/appraise.vue')
const AftersaleList = () => import('@/views/aftersale/index.vue')
const LotteryList = () => import('@/views/lottery/index.vue')
const ResourceBanner = () => import('@/views/resource/banner.vue')
const ResourceGoods = () => import('@/views/resource/goods.vue')
const Category = () => import('@/views/category/index.vue')
const AuthManage = () => import('@/views/auth/index.vue')
const AuthRole = () => import('@/views/auth/role.vue')
const Report = () => import('@/views/report/index.vue')

export default [
  {
    path: '/dashboard',
    component: Layout,
    name: '控制台',
    meta: {
      title: '控制台',
			affix: true,
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          title: '控制台',
          affix: true,
        },
      },
    ],
  },
	{
		path: '/statistics',
    component: Layout,
		name: 'statistics',
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '数据统计',
		},
    icon: 'el-icon-location',
		children: [{
			name: 'statistics',
			path: '/statistics',
			component: Statistics,
			meta: {
				title: '数据统计',
			}
		}]
	},
	{
		path: '/user',
    component: Layout,
		name: '用户管理',
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '用户管理',
		},
    icon: 'el-icon-location',
		children: [{
			name: 'userpage',
			path: '/user/list',
      component: User,
			meta: {
				icon: 'el-icon-menu',
				title: '用户列表',
			}
		}]
	},
	{
		name: 'goods',
		path: '/goods',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '商品管理',
		},
		children: [
			{
				name: 'goodsAuction',
				path: '/goods/Auction',
				component: Auction,
				meta: {
					icon: 'el-icon-menu',
					title: '拍卖管理',
				}
			},
			{
				name: 'goodsConsignment',
				path: '/goods/Consignment',
				component: Consignment,
				meta: {
					icon: 'el-icon-menu',
					title: '挂售管理',
				}
			}
		]
	},
	{
		name: 'order',
		path: '/order',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '订单管理',
		},
		children: [
			{
				name: 'orderPage',
				path: '/order/list',
				component: OrderList,
				meta: {
					icon: 'el-icon-menu',
					title: '订单列表',
				}
			},
			{
				name: 'orderAppraise',
				path: '/orderAppraise',
				component: OrderAppraise,
				meta: {
					icon: 'el-icon-menu',
					title: '评价管理',
				}
			}
		]
	},
	{
		name: 'aftersale',
		path: '/aftersale',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '售后管理',
		},
		children: [
			{
				name: 'aftersalepage',
				path: '/aftersale/list',
				component: AftersaleList,
				meta: {
					icon: 'el-icon-menu',
					title: '售后列表',
				}
			}
		]
	},
	{
		name: 'lottery',
		path: '/lottery',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '抽奖管理',
		},
		children: [{
			name: 'lotterypage',
			path: '/lotterypage',
			component: LotteryList,
			meta: {
				icon: 'el-icon-menu',
				title: '抽奖管理',
			}
		}]
	},
	{
		name: 'resource',
		path: '/resource',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '资源位管理',
		},
		children: [
			{
				name: 'resourceBanner',
				path: '/resource/banner',
				component: ResourceBanner,
				meta: {
					icon: 'el-icon-menu',
					title: 'banner管理',
				}
			},
			{
				name: 'resourceGoods',
				path: '/resource/goods',
				component: ResourceGoods,
				meta: {
					icon: 'el-icon-menu',
					title: '热门商品管理',
				}
			}
		]
	},
	{
		name: 'category',
		path: '/category',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '分类管理',
		},
		children: [{
			name: 'categorypage',
			path: '/category/index',
			component: Category,
			meta: {
				icon: 'el-icon-menu',
				title: '分类管理',
			}
		}]
	},
	{
		name: 'auth',
		path: '/auth',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '权限管理',
		},
		children: [
			{
				name: 'authPage',
				path: '/auth/manage',
				component: AuthManage,
				meta: {
					icon: 'el-icon-menu',
					title: '账号管理',
				}
			},
			{
				name: 'authRole',
				path: '/auth/role',
				component: AuthRole,
				meta: {
					icon: 'el-icon-menu',
					title: '角色管理',
				}
			}
		]
	},
	{
		name: 'report',
		path: '/report',
		component: Layout,
		meta: {
			icon: 'el-icon-eleme-filled',
			title: '举报管理',
		},
		children: [{
			name: 'reportpage',
			path: '/report/list',
			component: Report,
			meta: {
				icon: 'el-icon-menu',
				title: '举报管理',
			}
		}]
	}
]
