/**
 * Created by cycold@qq.com on 2017-03-22.
 * from https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/currency.js
 */

const digitsRE = /(\d{3})(?=\d)/g

/**
 * 货币处理  比如: currency(8, "$", 2) => "$8.00"
 * @param  {Number|String} value    货币数字
 * @param  {String} currency 货币符号
 * @param  {Number} decimals 可以保留的小数点位数
 * @return {String}
 */
function currency (value, currency, decimals) {
  if (value == null) value = 0
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

export default currency
