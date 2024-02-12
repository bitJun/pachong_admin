import request from '@/utils/request'

// 获取菜单
export const GetMenus = params => {
  return request({
    url: '/api/yshop/menus/build',
    method: 'get',
    params,
  })
}
