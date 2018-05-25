<template>
	<el-select v-model="comapnyAccountID" :value="value" placeholder="请选择商家" filterable clearable>
      <el-option v-for="item in dataList" :label="item.companyAccountName" :value="item.companyAccountId+''" :key="item.companyAccountId+''">
        <span style="float: left">{{ item.companyAccountId }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.companyAccountName }}</span>
      </el-option>
	</el-select>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'updateVal'
  },
  components:{},
  props: {
    value: {
      type: String,
      default:''
    }
  },
  watch:{
    value(val) {
      this.comapnyAccountID=val
    },
    comapnyAccountID(val) {
      this.$emit('updateVal',val)

      //this.$emit('input', val)
    }
  },
  data () {
    return {
      dataList:[],
      comapnyAccountID:''
    }
  },
  methods:{
    async loadData(){
      let params={reloadData:false}
      let result=await this.$api.company.getCompanyAccountList(params)
      const {error,data}=result
      if(error!=null)
        return
      this.dataList=data
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
</script>
