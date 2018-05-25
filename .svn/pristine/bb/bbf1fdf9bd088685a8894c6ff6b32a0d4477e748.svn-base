<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>
    <h2>{{ $t("name") }}</h2>
    </span>
    <h3>with Vuex</h3>
    <button @click="setLang('cn')">中文</button>
    <button @click="setLang('en')">英文</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    setLang: function(lang){
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
