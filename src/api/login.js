import request from '@/utils/request'

// 登录接口
export const Login = data => {
  return request({
    url: '/api/yshop/common/auth/login_user',
    method: 'post',
    data,
  })
}

// 获取登录用户信息
export const GetAuthCode = () => {
  return request({
    url: '/api/yshop/common/auth/code',
    method: 'get',
  })
}

// 获取登录用户信息
export const GetUserinfo = () => {
  return request({
    url: '/api/yshop/common/auth/info_user',
    method: 'get',
  })
}
