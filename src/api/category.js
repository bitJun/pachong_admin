import request from '@/utils/request'

// 获取分类
export const queryCategoryList = () => {
  return request({
    url: '/api/yshop/yx_store_category/category',
    method: 'get',
  })
}

// 获取完整分类路径
export const Login = data => {
  return request({
    url: '/api/yshop/yx_store_category/getfullpath',
    method: 'post',
    data,
  })
}