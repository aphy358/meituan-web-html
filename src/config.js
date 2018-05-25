/**
 * Created by cy on 2017-12-14.
 */

// 是否是产品环境
const pro = process.env.NODE_ENV === "production"

// 获取公司配置文件
const company = process.env.COMPANY || {}


// api baseURL
const api = ""
// 显示
const cdn = "http://192.168.1.227/pot/show/"
// 下载
const cdnd = "http://192.168.1.227/pot/down/"


const config = {
  pro, // 是否是产品环境
  api, // base api url
  cdn, // base cdn url
  cdnd,
  company
}

Object.defineProperty(config, "install", {
  configurable: false,
  enumberable: false,
  writable: false,
  value: function (Vue, options) {
    Vue.$config = config
    Vue.prototype.$config = config
  }
})

export default config
