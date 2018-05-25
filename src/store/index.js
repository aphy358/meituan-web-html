import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, actions } from './mutations'
import * as getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
