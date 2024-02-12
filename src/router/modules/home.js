const Layout = () => import('@/layout/index.vue')
const Dashboard = () => import('@/views/home/index.vue')
const Statistics = () => import('@/views/statistics/index.vue')
const User = () => import('@/views/user/index.vue')

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
			name: 'statisticspage',
			path: '/statisticspage',
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
			path: '/userpage',
      component: User,
			meta: {
				icon: 'el-icon-menu',
				title: '用户列表',
			}
		}]
	},
	// {
	// 	name: 'goods',
	// 	path: '/goods',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '商品管理',
	// 		role: ['SA']
	// 	},
	// 	children: [
	// 		{
	// 			name: 'goodsAuction',
	// 			path: '/goodsAuction',
	// 			component: 'goods/auction/index',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '拍卖管理',
	// 				role: ['SA']
	// 			}
	// 		},
	// 		{
	// 			name: 'goodsConsignment',
	// 			path: '/goodsConsignment',
	// 			component: 'goods/consignment/index',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '挂售管理',
	// 				role: ['SA']
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'order',
	// 	path: '/order',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '订单管理',
	// 		role: ['SA']
	// 	},
	// 	children: [
	// 		{
	// 			name: 'orderPage',
	// 			path: '/orderPage',
	// 			component: 'order/list',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '订单列表',
	// 				role: ['SA']
	// 			}
	// 		},
	// 		{
	// 			name: 'orderAppraise',
	// 			path: '/orderAppraise',
	// 			component: 'order/appraise',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '评价管理',
	// 				role: ['SA']
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'aftersale',
	// 	path: '/aftersale',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '售后管理',
	// 		role: ['SA']
	// 	},
	// 	children: [
	// 		{
	// 			name: 'aftersalepage',
	// 			path: '/aftersalepage',
	// 			component: 'aftersale/index',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '售后列表',
	// 				role: ['SA']
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'lottery',
	// 	path: '/lottery',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '抽奖管理',
	// 		role: ['SA']
	// 	},
	// 	children: [{
	// 		name: 'lotterypage',
	// 		path: '/lotterypage',
	// 		component: 'lottery/index',
	// 		meta: {
	// 			icon: 'el-icon-menu',
	// 			title: '抽奖管理',
	// 			role: ['SA']
	// 		}
	// 	}]
	// },
	// {
	// 	name: 'resource',
	// 	path: '/resource',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '资源位管理',
	// 		role: ['SA']
	// 	},
	// 	children: [
	// 		{
	// 			name: 'resourceBanner',
	// 			path: '/resourceBanner',
	// 			component: 'resource/banner',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: 'banner管理',
	// 				role: ['SA']
	// 			}
	// 		},
	// 		{
	// 			name: 'resourceGoods',
	// 			path: '/resourceGoods',
	// 			component: 'resource/goods',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '热门商品管理',
	// 				role: ['SA']
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'category',
	// 	path: '/category',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '分类管理',
	// 		role: ['SA']
	// 	},
	// 	children: [{
	// 		name: 'categorypage',
	// 		path: '/categorypage',
	// 		component: 'category/index',
	// 		meta: {
	// 			icon: 'el-icon-menu',
	// 			title: '分类管理',
	// 			role: ['SA']
	// 		}
	// 	}]
	// },
	// {
	// 	name: 'auth',
	// 	path: '/auth',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '权限管理',
	// 		role: ['SA']
	// 	},
	// 	children: [
	// 		{
	// 			name: 'authPage',
	// 			path: '/authPage',
	// 			component: 'auth/index',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '账号管理',
	// 				role: ['SA']
	// 			}
	// 		},
	// 		{
	// 			name: 'authRole',
	// 			path: '/authRole',
	// 			component: 'auth/role',
	// 			meta: {
	// 				icon: 'el-icon-menu',
	// 				title: '角色管理',
	// 				role: ['SA']
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'report',
	// 	path: '/report',
	// 	meta: {
	// 		icon: 'el-icon-eleme-filled',
	// 		title: '举报管理',
	// 		role: ['SA']
	// 	},
	// 	children: [{
	// 		name: 'reportpage',
	// 		path: '/reportpage',
	// 		component: 'report/index',
	// 		meta: {
	// 			icon: 'el-icon-menu',
	// 			title: '举报管理',
	// 			role: ['SA']
	// 		}
	// 	}]
	// }
]
