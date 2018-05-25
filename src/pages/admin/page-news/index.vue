<template>
  <component :is="curComponent" :paramObj="paramObj" @forward="forward"></component>
</template>
<script>
  import NewsForm from './news-form'
  import NewsList from './news-list'
  export default {
    components: { NewsForm, NewsList },
    data () {
      return{
        curComponent:'NewsList',
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
