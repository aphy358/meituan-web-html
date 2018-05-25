/**
* Created by cycold@qq.com on 2017-04-10.
*/


export const setStore = (name, content) => {
  if (!name) return
  if (typeof content == 'object') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 * @param  {String}       name
 * @param  {String} type  返回数据类型
 * @return {*}
 */
export const getStore = (name, type) => {

  if (!name) return

  let item = window.localStorage.getItem(name)

  if (item === "undefined") {
    return undefined
  }

  if (item === "false") {
    return false
  }

  if (item === "true") {
    return true
  }

  if (item === "null") {
    return null
  }

  if (type === 'Number' || type === Number) {
    return Number(item) || item
  }

  if (type === 'Object' || type === Object) {
    try {
      item = JSON.parse(item)
    } catch(e) {
      console.error("JSON parse failed, ", e)
      console.log("JSON parse failed: ", item)
    }
  }

  return item
}

/**
* 删除localStorage
*/
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const clearStore = () => {
  window.localStorage.clear()
}

export default {
  set: setStore,
  get: getStore,
  del: removeStore,
  clear: clearStore
}
