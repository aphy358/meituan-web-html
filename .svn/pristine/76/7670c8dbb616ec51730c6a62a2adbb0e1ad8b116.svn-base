import Vue from 'vue'
import VueI18n from 'vue-i18n'

import cn from './cn.json'
import en from './en.json'

Vue.use(VueI18n)

//const locale='en'

const messages={
  cn,
  en
}

function getLanguage() {
  let lang=localStorage.getItem('locale-lang')
  if(lang==null){
    let systemLanguage = (navigator.systemLanguage?navigator.systemLanguage:navigator.language)
    lang = systemLanguage.substr(0, 2)
    if(lang == 'zh'){
      lang ='cn'
    }else{
      lang = 'en'
    }
  }
  return lang
}

const i18n=new VueI18n({
  locale:getLanguage(),
  fallbackLocale: 'en',
  messages
})

export default i18n
