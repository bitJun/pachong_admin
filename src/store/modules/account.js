import { GetUserinfo } from '@/api/login'

export default {
  namespaced: true,
  state: {
    userinfo: null,
    permissionList: [],
  },
  mutations: {
    // 保存用户信息
    setUserinfo(state, data) {
      state.userinfo = data
    },
    // 清除用户信息
    clearUserinfo(state) {
      state.userinfo = null
    },
  },
  actions: {
    // 获取用户信息
    async getUserinfo({ commit }) {
      const res = await GetUserinfo()
      commit('setUserinfo', res)
      return Promise.resolve(res)
    },
  },
}
