import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   component: require('../pages/app').default,
    //   children:[
    //     {
    //       path: '',// app home
    //       name: 'homePage',
    //       meta: { login: false },
    //       component: require('../pages/home-page').default,
    //     }]
    // },
    // {
    //   path: '/admin/login',
    //   name: 'adminLogin',
    //   meta: { login: false },
    //   component: require('../pages/admin-login').default
    // },
    {
      path: '/admin',
      component: require('../pages/admin').default,
      children:[
        {
          path: 'sync-poi',
          name: 'syncPoi',
          meta: { login: true },
          component: require('../pages/admin/sync-poi').default,
        },
        {
          path: 'manager-poi',
          name: 'managerPoi',
          meta: { login: true },
          component: require('../pages/admin/manager-poi').default,
        },
        {
          path: 'syncPoiRooms',
          name: 'syncPoiRooms',
          meta: { login: true },
          component: require('../pages/admin/sync-rooms').default,
        },
        {
          path: 'companyAccount',
          name: 'companyAccount',
          meta: { login: true },
          component: require('../pages/admin/company-account').default,
        },
        { path: '', redirect: 'sync-poi' },
      ]
    },
  ]
})


// router.beforeEach(async (to, from, next) => {
//   // return next();
//   if (!to.meta['login']) return next()

//   // 用户已登录
//   if (Vue.$store.getters.getUser.userName) return next()

//   let res = await Vue.$api.request.getLoginUser({
//     loginType: 'backend-login',
//     shopId: localStorage.selectedShopId
//   })

//   //console.log('loginResult',JSON.stringify(res))

//   if (res.error) return next(false)

//   if (!res.data.success || res.data.errorCode == 'DeniedAccess') {
//     return next({ path: '/admin/login', params: { redirect: to.fullPath } })
//   }

//   //console.log('user', res.data.returnValue)

//   Vue.$config.cdn = res.data.returnValue.cloudShowUrl
//   Vue.$store.commit('updateUser', res.data.returnValue)

//   next()
// })

export default router
