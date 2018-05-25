// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang/lang'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import PagePanel from "./components/page-panel"

import api from "./api"
import config from "./config"
import utils from "./lib/utils"

Vue.config.productionTip = false
// 注册全局组件
Vue.component("page-panel", PagePanel)
// use Vue as an eventBus
Vue.$e = Vue.prototype.$e = new Vue()
// 挂载到window 便于调试
window.Vue = Vue
// 挂载store到Vue
Vue.$store = store
// 挂载router到Vue
Vue.$router = router
// 用于全局静态缓存
Vue.$static = {}
Vue.use(ElementUI)
Vue.use(config)
Vue.use(api)
Vue.use(utils)
export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
