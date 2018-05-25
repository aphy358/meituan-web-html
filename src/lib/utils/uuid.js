/**
 * Created by cycold@qq.com on 2017-04-01.
 */

/**
 * uuid
 * @param  {Number} len uuid的长度,默认5位 最长为10个字符
 * @return {String}
 */
export default function uuid(len = 5) {
  return Math.random().toString(36).substring(3, 3 + len)
}
