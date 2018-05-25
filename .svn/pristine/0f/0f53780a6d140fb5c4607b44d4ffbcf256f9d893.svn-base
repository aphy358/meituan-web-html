<template>
   <page-panel title="酒店信息推送">
    <template slot="page-panel-header-btns">
      <el-button type="primary" @click="onSave" :loading="isLoading">提交</el-button>
    </template>
    <section slot="page-panel-body">
      <el-form class="_form-beautify" :model="paramsForm" :rules="rules" ref="paramsForm" label-width="180px">
        <el-form-item label="商家ID" prop="companyAccountId">
          <company-account-selected v-model="paramsForm.companyAccountId"></company-account-selected>
        </el-form-item>
        <el-form-item label="酒店ID" prop="poiIds">
          <el-input type="textarea" :rows="10" placeholder="请输入推送酒店ID，多个以逗号隔开" v-model="paramsForm.poiIds" :maxlength="1000"></el-input>
          <el-button type="default" @click="onFormat">优化换行</el-button>
        </el-form-item>
      </el-form>
      <hr>
      <el-alert :title="submitMessage" type="info" show-icon v-show="submitMessage.length>0"> </el-alert>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>推送成功列表</span>
            </div>
            <el-table :data="successData" style="width: 100%">
              <el-table-column align="center" prop="poiId" label="酒店ID"> </el-table-column>
              <el-table-column align="center" prop="hotelName" label="酒店名称"> </el-table-column>
              <el-table-column align="center" prop="code" label="错误码"> </el-table-column>
              <el-table-column align="center" prop="message" label="错误信息"> </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>推送失败列表</span>
            </div>
            <el-table :data="failData" style="width: 100%">
              <el-table-column align="center" prop="poiId" label="酒店ID"> </el-table-column>
              <el-table-column align="center" prop="hotelName" label="酒店名称"> </el-table-column>
              <el-table-column align="center" prop="code" label="错误码"> </el-table-column>
              <el-table-column align="center" prop="message" label="错误信息"> </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </page-panel>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import filter from 'lodash/filter'
import trim from 'lodash/trim'
import CompanyAccountSelected from '@/pages/components/company-account-selected'
export default {
  components:{CompanyAccountSelected},
  data () {
    return {
     isLoading:false,
     successData:[],
     failData:[],
     submitMessage:'',
     paramsForm:{
        companyAccountId:'',
        poiIds:''
      },
      rules:{
        poiIds: [
          { required: true, message: '请输入推送酒店ID，多个以逗号隔开', trigger: 'change' }
        ],
        companyAccountId: [
          { type: 'string',required: true, message: '请选择商家', trigger: 'change' }
        ]
      }
    }
  },
  watch:{
    paramsForm(val) {
      console.log(val)
    }
  },
  methods:{
    onFormat(){
      if(this.paramsForm.poiIds.length>0){
         this.paramsForm.poiIds=trim(this.paramsForm.poiIds).replace(/\r/g,",")
         this.paramsForm.poiIds=trim(this.paramsForm.poiIds).replace(/\n/g,",") 
      }
    },
    onSave(row){
      this.onFormat()
      this.submitMessage=''
      let params=cloneDeep(this.paramsForm)
      //console.log('this.paramsForm',JSON.stringify(params))
      //return false
      let _this=this
      this.$refs.paramsForm.validate(async function(valid) {
        if (valid) {
          _this.isLoading=true
          let result = await _this.$api.request.syncPois(params)
          const {error,data}=result
          if(error!=null)
            return
          _this.isLoading=false
          if(data.success){
            _this.$message.success("操作成功")
            if(data.data.length>0){
              _this.successData=filter(data.data,{'success':true})
              _this.failData=filter(data.data,{'success':false})
              _this.submitMessage="提交总记录数="+_this.paramsForm.poiIds.split(',').length+",成功记录数="+_this.successData.length+",失败记录数="+_this.failData.length
            }
          }else{
            _this.$message.error(data.message)
          }
        }
      })
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

