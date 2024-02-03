import { ElLoading } from 'element-plus'
import router, { asyncRoutes } from '@/router'
import store from '@/store'
import { TOKEN } from '@/store/modules/app' // TOKEN变量名

const getPageTitle = title => {
  const appTitle = store.state.app.title
  if (title) {
    return `${title} - ${appTitle}`
  }
  return appTitle
}
const WhiteList = ['login', 'lock']
router.beforeEach(async to => {
  document.title = getPageTitle(!!to.meta && to.meta.title)

  if (WhiteList.includes(to.name)) {
    return true
  }
  if (!window.localStorage[TOKEN]) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
      replace: true,
    }
  } else {
    // 获取用户角色信息，根据角色判断权限
    let userinfo = store.state.account.userinfo
    if (!userinfo) {
      const loadingInstance = ElLoading.service({
        lock: true,
        text: '正在加载数据，请稍候~',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      try {
        userinfo = await store.dispatch('account/getUserinfo')
        loadingInstance.close()
      } catch (err) {
        loadingInstance.close()
        return false
      }
      asyncRoutes.forEach(item => {
        router.removeRoute(item.name)
      })
      return to.fullPath
    }

    // 生成菜单（如果你的项目有动态菜单，在此处会添加动态路由）
    if (store.state.menu.menus.length <= 0) {
      const loadingInstance = ElLoading.service({
        lock: true,
        text: '正在加载数据，请稍候~',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      try {
        await store.dispatch('menu/generateMenus', userinfo)
        loadingInstance.close()
        return to.fullPath
      } catch (err) {
        loadingInstance.close()
        return false
      }
    }

    // 判断是否处于锁屏状态
    if (to.name !== 'lock') {
      const { authorization } = store.state.app
      if (!!authorization && !!authorization.screenCode) {
        return {
          name: 'lock',
          query: {
            redirect: to.path,
          },
          replace: true,
        }
      }
    }
  }
})
