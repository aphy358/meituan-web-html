import http from './http'

/**
 * 查询所有商家列表
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const getCompanyAccountList = (args, loading = true) => http.post("/backend/company/getCompanyAccountList", args, loading)

/**
 * 全量推送商家下已推送过的所有酒店
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncAccountPois = (args, loading = true) => http.post("/backend/company/syncAccountPois", args, loading)

/**
 * 查询同步商家下所有推送未匹配酒店状态
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncAccountPoiStatus = (args, loading = true) => http.post("/backend/company/syncAccountPoiStatus", args, loading)
/**
 * 酒店产品批量上下线
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const productOnOffline = (args, loading = true) => http.post("/backend/company/productOnOffline", args, loading)
/**
 * 全量更新商家下所有已匹配上线房态数据
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncAccountRooms = (args, loading = true) => http.post("/backend/company/syncAccountRooms", args, loading)
