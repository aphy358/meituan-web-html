import http from './http'

/**
 * 同步酒店信息
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncPois = (args, loading = true) => http.post("/backend/sync/syncPois", args, loading)

/**
 * 酒店状态同步
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncPoiStatus = (args, loading = true) => http.post("/backend/sync/syncPoiStatus", args, loading)

/**
 * 初始化全量同步酒店房态数据
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const syncRoomStatus = (args, loading = true) => http.post("/backend/sync/syncRoomStatus", args, loading)

/**
 * 分页查询推送酒店数据
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const getMeiTuanHotelPageList = (args, loading = true) => http.post("/backend/sync/getMeiTuanHotelPageList", args, loading)
/**
 * 分页查询推送酒店房态数据
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const getMeiTuanChannelMappingPageList = (args, loading = true) => http.post("/backend/sync/getMeiTuanChannelMappingPageList", args, loading)

/**
 * 更新单条产品匹配状态
 * @param  {Object} 请求参数
 * @param  {Boolean} loading 是否显示loading 默认显示
 * @return {Promise}
 */
export const updateRoomStatus = (args, loading = true) => http.post("/backend/sync/updateRoomStatus", args, loading)