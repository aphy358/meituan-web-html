import {app} from '../main'
import * as types from './mutation-types'

export const state = {
  lang: 'en',
  user:{},
  queryParams:{},
  menu: {
    list: [],
    path: []
  }
}

export const mutations = {
  [types.SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  },
  reset(state){
    state.user  = {}
    state.menu  = {}
  },
  updateUser(state,user){
    state.user = user
  },
  SET_QUERY_PARAMS(state,queryParams){
    state.queryParams=queryParams||{}
  },
  updateMenu(state, menu) {
    state.menu = menu
    //state.menu = {...state.menu, ...menu}
  }
}

export const actions = {
  setLang({commit}, payload) {
    commit(types.SET_LANG, payload)
    localStorage.setItem('locale-lang', payload)
  },
  async setLangNew({commit}, payload){
  },
  reset({commit}){
    commit('reset')
  },
  updateUser({commit},user){
    commit('updateUser',user)
  },
  SET_QUERY_PARAMS({commit},queryParams){
    commit('SET_QUERY_PARAMS',queryParams)
  },
  updateMenu({commit}, menu) {
    commit('updateMenu',queryParams)
  }
}


