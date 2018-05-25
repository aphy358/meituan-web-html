<template>
   <page-panel title="商家推送管理">
    <template slot="page-panel-header-btns">
      
    </template>
    <section slot="page-panel-body">
      <!-- 查询 -->
      <div class="_search-header">
        <el-form :inline="true" :model="queryObj">
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="loadTableData()" :loading="isLoading">查询(缓存数据)</el-button>
            <el-button icon="el-icon-search" type="primary" @click="loadTableData(true)" :loading="isLoading">重新加载(更新缓存)</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" prop="companyAccountId" label="商家ID"> </el-table-column>
        <el-table-column align="center" prop="companyAccountName" label="商家名称"> </el-table-column>
        <el-table-column align="center" prop="partnerId" label="partnerId"> </el-table-column>
        <el-table-column align="center" prop="encryptKey" label="secretKey"> </el-table-column>
        <el-table-column align="center" width="350" label="操作">
          <template slot-scope="scope">
            <el-dropdown size="small" split-button type="primary"  @click="onPushPoi(scope.row)">
              全量更新酒店
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="onSyncPoiStatus(scope.row)">更新酒店匹配状态</el-dropdown-item>
                <el-dropdown-item @click.native="onInitSyncPoiRooms(scope.row)">初始化商家全量房态</el-dropdown-item>
                <el-dropdown-item @click.native="onSyncAccountRooms(scope.row)">全量更新商家房态</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
<!-- 
            <el-button size="mini" type="info" @click="onPushPoi(scope.row)" :loading="isLoading">全量推送酒店</el-button>
            <el-button size="mini" type="success" @click="onSyncPoiStatus(scope.row)" :loading="isLoading">更新酒店匹配状态</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </section>
  </page-panel>
</template>
<script>
import filter from 'lodash/filter'
export default {
  components:{},
  data () {
    return {
      isLoading:false,
      tableData:[],
      successData:[],
      failData:[],
      queryObj:{
        reloadData:false
      },
    }
  },
  methods:{
     loadTableData: async function(reloadData=false) {
      this.isLoading=true
      this.queryObj.reloadData=reloadData
      let result=await this.$api.company.getCompanyAccountList(this.queryObj)
      const {error,data}=result
      if(error!=null)
        return
      this.isLoading=false
      this.tableData=data
    },
    async onPushPoi(row){
      this.isLoading=true
      try {
        await this.$confirm(`确认要提交操作吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        let params={'companyAccountId':row.companyAccountId}
        let result = await this.$api.company.syncAccountPois(params)
        const {error,data}=result
        if(error!=null)
          return
        this.isLoading=false
        if(data.success){
          if(data.data.length>0){
            this.successData=filter(data.data,{'success':true})
            this.failData=filter(data.data,{'success':false})
            let resultMsg="成功记录数="+this.successData.length+",失败记录数="+this.failData.length
            this.$message.success("操作成功,"+resultMsg)
          }
        }else{
          this.$message.error(data.message)
        }
      } catch (e) {
        this.isLoading=false
      }
    },
    onSyncPoiStatus:async function(row){
      this.isLoading=true
      try {
        await this.$confirm(`确认要提交操作吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        let params={'companyAccountId':row.companyAccountId}
        let result = await this.$api.company.syncAccountPoiStatus(params)
        const {error,data}=result
        this.isLoading=false
        if(error!=null)
          return
        if(data.success){
          this.$message.success("操作成功")
        }else{
          this.$message.error(data.message)
        }
      } catch (e) {
        this.isLoading=false
      }
    },
    onInitSyncPoiRooms:async function(row){
      let _this=this
      try {
        await this.$confirm(`此操作会全量推送商家下所有房态数据并覆盖之前的所有配置数据，确认要提交操作吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        this.$prompt('请输入推送天数', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:'最大只能推60天',
          inputType:'Number',
          inputValue:60,
          inputErrorMessage: '格式不正确',
          inputValidator:function(val){
            if(val>60){
              return '最大值为60'
            }
            return true
          }
        }).then(async function({ value }){
          let params={companyAccountId:row.companyAccountId,syncDays:value}
          let result = await _this.$api.request.syncRoomStatus(params)
          const {error,data}=result
          if(error!=null)
            return
          if(data.success){
            _this.$message.success("操作成功")
          }else{
            _this.$message.error(data.message)
          }
        }).catch(() => {
          
        })
      } catch (e) {
      }

    },
    async onSyncAccountRooms(row){
      let _this=this
      try {
        await this.$confirm(`此操作会全量更新商家下所有已匹配上线房态数据，确认要提交操作吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        this.$prompt('请输入推送天数', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:'最大只能推60天',
          inputType:'Number',
          inputValue:60,
          inputErrorMessage: '格式不正确',
          inputValidator:function(val){
            if(val>60){
              return '最大值为60'
            }
            if(val<1){
              return '最小值为1'
            }
            return true
          }
        }).then(async function({ value }){
          let params={companyAccountId:row.companyAccountId,syncDays:value}
          let result = await _this.$api.company.syncAccountRooms(params)
          const {error,data}=result
          if(error!=null)
            return
          if(data.success){
            _this.$message.success("操作成功")
          }else{
            _this.$message.error(data.message)
          }
        }).catch(() => {
          
        })
      } catch (e) {
      }
    }
  },
  created() {
    this.loadTableData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

