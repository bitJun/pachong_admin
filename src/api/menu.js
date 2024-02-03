import request from '@/utils/request'

// 获取菜单
export const GetMenus = params => {
  return request({
    url: '/menus',
    method: 'get',
    params,
  })
}
