import request from '@/utils/request'

// 拍卖列表
export const queryAuctionList = () => {
  return request({
    url: '/api/yshop/yx_pc_paipin/admin/list',
    method: 'get',
  })
}
