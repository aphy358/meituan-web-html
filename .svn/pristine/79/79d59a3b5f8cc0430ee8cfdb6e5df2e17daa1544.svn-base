<template>
  <component :is="curComponent" :paramObj="paramObj" @forward="forward"></component>
</template>
<script>
  import CompanyList from './company-list'
  export default {
    components: { CompanyList },
    data () {
      return{
        curComponent:'CompanyList',
        paramObj:{}
      }
    },
    methods: {
      forward(comp,data){
        this.curComponent=comp
        this.paramObj=data||{}
      }
    },
  }
</script>
