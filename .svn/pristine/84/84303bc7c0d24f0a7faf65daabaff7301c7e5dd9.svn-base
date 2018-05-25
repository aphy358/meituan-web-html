<template>
<el-container>
  <el-header style="padding: 0;height: auto;"><page-header></page-header></el-header>
  <el-main style="padding: 0;overflow: inherit;"><router-view></router-view></el-main>
  <el-footer style="padding: 0;overflow: inherit;"><page-footer></page-footer></el-footer>
</el-container>

</template>

<script>
import PageHeader from '@/components/page-header'
import PageFooter from '@/components/page-footer'
export default {
  name: 'appIndex',
  components:{PageHeader,PageFooter},
  data () {
    return {

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
<style>
</style>

