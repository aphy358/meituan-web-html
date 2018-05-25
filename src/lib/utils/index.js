
import local from "@/lib/utils/local"
import date from "@/lib/utils/date"
import md5 from "@/lib/utils/md5"
import tree from "@/lib/utils/tree"
import prettySize from "@/lib/utils/prettySize"

export default {
  install(Vue, options) {
    Vue.$local = Vue.prototype.$local = local
    Vue.$utils = Vue.prototype.$utils = {
      md5,
      date,
      tree,
      prettySize,
    }
  }
}
